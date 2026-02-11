document.addEventListener('DOMContentLoaded', () => {
    
    const btnMobile = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if(btnMobile) {
        btnMobile.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            btnMobile.setAttribute('aria-expanded', isOpen);
        }, { passive: true });
        
        document.querySelectorAll('.nav-menu a').forEach(l => {
            l.addEventListener('click', () => {
                navMenu.classList.remove('active');
                btnMobile.setAttribute('aria-expanded', 'false');
            }, { passive: true });
        });
    }

    const accHeaders = document.querySelectorAll('.accordion-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const isActive = header.classList.contains('active');
            
            accHeaders.forEach(h => {
                h.classList.remove('active');
                const c = h.nextElementSibling;
                c.style.maxHeight = null;
                c.style.paddingBottom = null;
            });
            
            if (!isActive) {
                header.classList.add('active');
                const content = header.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + 20 + "px";
                content.style.paddingBottom = "15px";
            }
        }, { passive: true });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                if (entry.target.classList.contains('stagger-grid')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        child.style.transitionDelay = `${index * 100}ms`;
                        child.classList.add('active');
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    const staggerGrids = document.querySelectorAll('.stagger-grid');
    staggerGrids.forEach((grid) => observer.observe(grid));

    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if(track && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 300, behavior: 'smooth' });
        }, { passive: true });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -300, behavior: 'smooth' });
        }, { passive: true });
    }
});