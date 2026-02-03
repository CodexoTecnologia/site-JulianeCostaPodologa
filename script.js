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

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

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