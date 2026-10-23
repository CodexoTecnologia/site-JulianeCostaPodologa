import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const logo = (
  await readFile(new URL('../public/brand/juliane-original.png', import.meta.url))
).toString('base64');
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#fcf8fe"/><path d="M850 0C550 120 1100 280 800 630H1200V0Z" fill="#eac6fd"/><path d="M1050 0C750 250 1150 280 990 630H1200V0Z" fill="#e4b3fe"/><text x="65" y="115" fill="#613176" font-family="Arial" font-size="18" letter-spacing="3">PODOLOGIA EM COLOMBO</text><text x="60" y="230" fill="#313131" font-family="Arial" font-size="62" font-weight="bold">Cuidado com seus pés,</text><text x="60" y="315" fill="#613176" font-family="Arial" font-size="62" font-weight="bold">atenção a você.</text><text x="65" y="440" fill="#5c5362" font-family="Arial" font-size="25">Podologia · ILIB · Bem-estar</text><text x="65" y="495" fill="#5c5362" font-family="Arial" font-size="20">Centro · Colombo, PR</text><image x="800" y="120" width="340" height="340" href="data:image/png;base64,${logo}"/></svg>`;
await sharp(Buffer.from(svg))
  .jpeg({ quality: 86 })
  .toFile(fileURLToPath(new URL('../public/og-image.jpg', import.meta.url)));
await sharp(fileURLToPath(new URL('../public/brand/juliane-original.png', import.meta.url)))
  .resize(192, 192)
  .png()
  .toFile(fileURLToPath(new URL('../public/favicon.png', import.meta.url)));
