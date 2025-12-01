// Simple JavaScript that will definitely work
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle with smooth animation
    const menuBtn = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('.header__menu');
    
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function() {
            const isOpening = !menu.classList.contains('header__menu--open');
            menu.classList.toggle('header__menu--open');
            menuBtn.textContent = menu.classList.contains('header__menu--open') ? '✕' : '☰';
            
            // Smooth menu animation
            if (isOpening) {
                menu.style.transform = 'translateX(0)';
                menu.style.opacity = '1';
            } else {
                menu.style.transform = 'translateX(100%)';
                menu.style.opacity = '0';
            }
        });
    }

    // Header scroll effect with smooth transition
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            header.style.backdropFilter = 'blur(10px)';
            header.style.backgroundColor = 'rgb(65,101,150)';
        } else {
            header.classList.remove('scrolled');
            header.style.backdropFilter = 'blur(0px)';
            header.style.backgroundColor = 'transparent';
        }
    });

    // Smooth scrolling for anchor links with momentum
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                // Enhanced smooth scroll with easing
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open with animation
                if (menu && menu.classList.contains('header__menu--open')) {
                    menu.style.transform = 'translateX(100%)';
                    menu.style.opacity = '0';
                    setTimeout(() => {
                        menu.classList.remove('header__menu--open');
                        if (menuBtn) menuBtn.textContent = '☰';
                    }, 300);
                }
            }
        });
    });

    // Enhanced fade in animation on scroll with staggered delay
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                // Staggered animation delay
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.classList.add('visible');
                }, index * 100); // 100ms delay between each element
            }
        });
    }
    
    // Initialize fade elements with starting state
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on load and scroll
    checkFade();
    window.addEventListener('scroll', checkFade);

    // Enhanced card hover effects with smooth transitions
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Add transition for smooth animation
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
        });
    });

    // Add loading animation for page content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 200);
    }

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    console.log('Website loaded successfully with smooth animations!');
});

// Add CSS for ripple effect (you can add this to your CSS file)
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
    
    /* Ensure smooth scrolling for the whole page */
    html {
        scroll-behavior: smooth;
    }
`;
document.head.appendChild(style);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();   // Start when visible
        } else {
            video.pause();  // Pause when not visible
        }
    });
}, { threshold: 0.5 });

observer.observe(video);