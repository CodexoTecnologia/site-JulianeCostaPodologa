document.addEventListener('DOMContentLoaded', () => {
    
    const btnMobile = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if(btnMobile) {
        btnMobile.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-menu a').forEach(l => {
            l.addEventListener('click', () => navMenu.classList.remove('active'));
        });
    }

    const accHeaders = document.querySelectorAll('.accordion-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.paddingBottom = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 20 + "px";
                content.style.paddingBottom = "15px";
            }
        });
    });


    const observerOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
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
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
});