// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navRight = document.getElementById('navRight');

mobileMenuBtn.addEventListener('click', () => {
    navRight.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-right a').forEach(link => {
    link.addEventListener('click', () => {
        navRight.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add scroll-animate class to elements
document.querySelectorAll('.review-Card, .placement-card, .ourPrograms-img, .bcText').forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// Add staggered animation delays to review cards
document.querySelectorAll('.review-Card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
});

// Add staggered animation delays to placement cards
document.querySelectorAll('.placement-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Button hover effects
document.querySelectorAll('button, .btn-apply').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Add parallax effect to hero section (subtle)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < 700) {
        hero.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
    }
});

