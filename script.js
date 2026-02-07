// Load Header and Footer
function loadHeaderFooter() {
    // Load header
    const headerElement = document.getElementById('header');
    if (headerElement) {
        const headerHTML = `<nav class="navbar">
    <div class="container">
        <div class="nav-wrapper">
            <div class="logo">
                <img src="logo.png" alt="interiorpoint.in logo" class="logo-image">
                <h1>interiorpoint.in</h1>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
            <button class="hamburger" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</nav>`;
        headerElement.innerHTML = headerHTML;
    }

    // Load footer
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        const footerHTML = `<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h4>interiorpoint.in</h4>
                <p>Transforming Mumbai's spaces into works of art. Your vision, our expertise.</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61586791636838&sfnsn=wa"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/interiorpoint.in?utm_source=qr&igsh=MWZpZGxydGx5dmZqMg=="><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/919867822265" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/interior-point-9b572a3a8/"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul>
                    <li><a href="services.html">Bespoke Furniture & Aluminum Solutions</a></li>
                    <li><a href="services.html">Designer Blinds & Sun Control Films</a></li>
                    <li><a href="services.html">Ceilings & Professional Painting</a></li>
                    <li><a href="services.html">Modern Flooring & Wall Decor</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>`;
        footerElement.innerHTML = footerHTML;
    }

    // Initialize hamburger menu after loading header
    initializeMobileMenu();
}

// Call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeaderFooter);
} else {
    loadHeaderFooter();
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Only initialize mobile menu behavior when both elements exist
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Responsive navigation: ensure menu closed when resizing
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    } else {
        // If hamburger or navMenu are not present (mobile hide), ensure no runtime errors
        // and exit gracefully.
        return;
    }
}

// (handled inside initializeMobileMenu)

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

// Responsive navigation handled within initializeMobileMenu

// Keyboard navigation handled within initializeMobileMenu

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
