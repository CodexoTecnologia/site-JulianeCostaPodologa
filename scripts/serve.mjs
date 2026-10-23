import { createServer } from 'node:http';
import { readFile, stat, appendFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { gzipSync } from 'node:zlib';
const root = resolve(process.env.PREVIEW_DIR || 'dist');
const port = Number(process.env.PORT || 4331);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};
createServer(async (req, res) => {
  if (process.env.REQUEST_LOG) {
    res.on('finish', () => {
      void appendFile(
        process.env.REQUEST_LOG,
        JSON.stringify({
          path: req.url,
          method: req.method,
          status: res.statusCode,
          bytes: res.getHeader('Content-Length'),
        }) + '\n',
      );
    });
  }
  try {
    const url = new URL(req.url || '/', 'http://localhost');
    let file = resolve(root, '.' + decodeURIComponent(url.pathname));
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    try {
      if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    } catch {
      file = resolve(root, '404.html');
      res.statusCode = 404;
    }
    let body = await readFile(file);
    const type = types[extname(file)] || 'application/octet-stream';
    res.setHeader('Content-Type', type);
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (type === 'video/mp4') {
      res.setHeader('Accept-Ranges', 'bytes');
      if (req.headers.range) {
        const m = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
        if (!m) {
          res.writeHead(416, { 'Content-Range': `bytes */${body.length}` }).end();
          return;
        }
        const start = Number(m[1]);
        const end = m[2] ? Math.min(Number(m[2]), body.length - 1) : body.length - 1;
        if (start > end) {
          res.writeHead(416, { 'Content-Range': `bytes */${body.length}` }).end();
          return;
        }
        res.statusCode = 206;
        res.setHeader('Content-Range', `bytes ${start}-${end}/${body.length}`);
        body = body.subarray(start, end + 1);
      }
    } else if (
      /^(text\/|application\/(xml|json))/.test(type) &&
      req.headers['accept-encoding']?.includes('gzip')
    ) {
      body = gzipSync(body);
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader('Vary', 'Accept-Encoding');
    }
    res.setHeader('Content-Length', body.length);
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(port, '127.0.0.1', () => console.log(`Juliane Costa: http://127.0.0.1:${port}/`));
