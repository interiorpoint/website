// Load Header and Footer
async function loadHeaderFooter() {
    try {
        // Load header
        const headerResponse = await fetch('header.html');
        const headerContent = await headerResponse.text();
        const headerElement = document.getElementById('header');
        if (headerElement) {
            headerElement.innerHTML = headerContent;
        }

        // Load footer
        const footerResponse = await fetch('footer.html');
        const footerContent = await footerResponse.text();
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.innerHTML = footerContent;
        }

        // Initialize hamburger menu after loading header
        initializeMobileMenu();
    } catch (error) {
        console.error('Error loading header/footer:', error);
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', loadHeaderFooter);

// Mobile Menu Toggle
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.style.display = 'none';
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // Responsive navigation
    if (window.innerWidth <= 768) {
        if (navMenu) navMenu.style.display = 'none';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            if (navMenu) navMenu.style.display = 'flex';
        } else {
            if (navMenu) navMenu.style.display = 'none';
        }
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (navMenu) navMenu.style.display = 'none';
            if (hamburger) hamburger.classList.remove('active');
        }
    });
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Smooth scroll to contact
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll Animation - Add fade-in effect on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards, portfolio items, and stat boxes
document.querySelectorAll('.service-card, .portfolio-item, .stat-box, .mumbai-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styles
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #e74c3c;
        border-bottom: 2px solid #e74c3c;
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// Responsive navigation
if (window.innerWidth <= 768) {
    if (navMenu) navMenu.style.display = 'none';
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (navMenu) navMenu.style.display = 'flex';
    } else {
        if (navMenu) navMenu.style.display = 'none';
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu) navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
    }
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statBoxes = document.querySelectorAll('.stat-box h3');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statBoxes.forEach(box => {
                const target = parseInt(box.textContent);
                animateCounter(box, target);
            });
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats && aboutStats.parentElement) {
    statsObserver.observe(aboutStats);
}

// Log page load
console.log('InteriorPoint Website Loaded Successfully');
console.log('Serving Premium Interior Design Services in Mumbai');

// Carousel functionality
let slideIndex = 1;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    // Generate dots for all carousel slides
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('carousel-dots');
    
    if (dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.onclick = () => currentSlide(index + 1);
            dotsContainer.appendChild(dot);
        });
    }
    
    showSlide(slideIndex);
    
    // Auto advance carousel every 5 seconds
    setInterval(() => {
        changeSlide(1);
    }, 5000);
});
