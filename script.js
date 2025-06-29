document.addEventListener('DOMContentLoaded', function() {
    // Add cyberpunk effects
    createMatrixRain();
    createCyberScan();
    createDigitalGrid();

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar transparency on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });

    // Enhanced scroll-triggered animations with more effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to sections with enhanced effects
    const gameSection = document.querySelector('.game-section');
    const aboutSection = document.querySelector('.about-section');
    const contactSection = document.querySelector('.contact-section');

    if (gameSection) {
        gameSection.classList.add('fade-in');
        observer.observe(gameSection);
    }

    if (aboutSection) {
        aboutSection.classList.add('scale-in');
        observer.observe(aboutSection);
    }

    if (contactSection) {
        contactSection.classList.add('slide-up');
        observer.observe(contactSection);
    }

    // Enhanced game showcase animations
    const gameVisual = document.querySelector('.game-visual');
    const gameInfo = document.querySelector('.game-info');

    if (gameVisual && gameInfo) {
        gameVisual.classList.add('slide-in-left');
        gameInfo.classList.add('slide-in-right');
        observer.observe(gameVisual);
        observer.observe(gameInfo);
    }

    // Animate individual game features with stagger effect
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.classList.add('stagger-' + (index + 1));
        observer.observe(feature);
    });

    // Enhanced stats animation with stagger
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.classList.add('stagger-' + (index + 1));
        observer.observe(item);
    });

    // Animate contact items with stagger
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.classList.add('stagger-' + (index + 1));
        observer.observe(item);
    });

    // Animate social links with stagger
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.classList.add('stagger-' + (index + 1));
        observer.observe(link);
    });

    // Add floating animation to logos
    const heroLogo = document.querySelector('.hero-logo-image');
    const sectionLogo = document.querySelector('.section-logo');
    const navLogo = document.querySelector('.logo-image');

    if (heroLogo) heroLogo.classList.add('float-animation');
    if (sectionLogo) sectionLogo.classList.add('float-animation');
    if (navLogo) navLogo.classList.add('pulse-glow');

    // Enhanced section title animations
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('rotate-in');
        observer.observe(title);
    });

    // Game tagline animation
    const gameTagline = document.querySelector('.game-tagline');
    if (gameTagline) {
        gameTagline.classList.add('slide-down');
        observer.observe(gameTagline);
    }

    // Game description animation
    const gameDescription = document.querySelector('.game-description');
    if (gameDescription) {
        gameDescription.classList.add('fade-in', 'stagger-2');
        observer.observe(gameDescription);
    }

    // Game buttons animation
    const gameButtons = document.querySelectorAll('.game-button');
    gameButtons.forEach((button, index) => {
        button.classList.add('scale-in', 'stagger-' + (index + 3));
        observer.observe(button);
    });

    // About text animation
    const aboutDescriptions = document.querySelectorAll('.about-description');
    aboutDescriptions.forEach((desc, index) => {
        desc.classList.add('slide-up', 'stagger-' + (index + 1));
        observer.observe(desc);
    });

    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = function() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const current = parseInt(stat.textContent);
            const increment = target / 100;
            
            if (current < target) {
                stat.textContent = Math.ceil(current + increment);
                setTimeout(animateStats, 20);
            } else {
                stat.textContent = target;
            }
        });
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        statsObserver.observe(statsGrid);
    }

    // Enhanced parallax with multiple layers
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg');
        const gameImageContainer = document.querySelector('.game-image-container');
        
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        // Parallax for game image
        if (gameImageContainer && scrolled > window.innerHeight * 0.5) {
            const gameSection = document.querySelector('.game-section');
            const rect = gameSection.getBoundingClientRect();
            const parallaxValue = (window.innerHeight - rect.top) * 0.1;
            gameImageContainer.style.transform = `translateY(${parallaxValue}px)`;
        }
    });

    // Simplified random glitch effects - less frequent
    function randomGlitch() {
        const glitchElements = document.querySelectorAll('.glitch');
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        
        if (randomElement && Math.random() > 0.7) { // Only trigger 30% of the time
            randomElement.style.animation = 'none';
            randomElement.offsetHeight; // Trigger reflow
            randomElement.style.animation = null;
        }
        
        // Longer interval between glitches (8-15 seconds)
        setTimeout(randomGlitch, Math.random() * 7000 + 8000);
    }

    // Start random glitch effects
    setTimeout(randomGlitch, 5000);

    // Simplified scan line effect - less frequent
    const gameImage = document.querySelector('.game-image');
    if (gameImage) {
        setInterval(() => {
            if (Math.random() > 0.6) { // Only trigger 40% of the time
                const scanLine = document.createElement('div');
                scanLine.style.cssText = `
                    position: absolute;
                    top: ${Math.random() * 100}%;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: var(--primary-color);
                    opacity: 0.4;
                    animation: scanMove 0.8s ease-out forwards;
                `;
                
                const keyframes = `
                    @keyframes scanMove {
                        0% { transform: translateX(-100%); opacity: 0.8; }
                        100% { transform: translateX(100%); opacity: 0; }
                    }
                `;
                
                if (!document.querySelector('#scan-animation')) {
                    const style = document.createElement('style');
                    style.id = 'scan-animation';
                    style.textContent = keyframes;
                    document.head.appendChild(style);
                }
                
                gameImage.appendChild(scanLine);
                
                setTimeout(() => {
                    if (scanLine.parentNode) {
                        scanLine.parentNode.removeChild(scanLine);
                    }
                }, 800);
            }
        }, 4000); // Less frequent
    }

    // Interactive button hover effects
    const buttons = document.querySelectorAll('.game-button, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Reduced dynamic background color change intensity
    window.addEventListener('scroll', function() {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const hue = 240 + (scrollPercent * 30); // Blue to purple range
        
        document.documentElement.style.setProperty('--primary-color', `hsl(${hue}, 70%, 60%)`);
    });

    // Mobile menu toggle (if needed in future)
    const navToggle = document.createElement('button');
    navToggle.innerHTML = '☰';
    navToggle.className = 'nav-toggle';
    navToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: var(--primary-color);
        font-size: 1.5rem;
        cursor: pointer;
    `;
    
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        const existingToggle = document.querySelector('.nav-toggle');
        
        if (!existingToggle) {
            navToggle.style.display = 'block';
            navContainer.appendChild(navToggle);
            
            navToggle.addEventListener('click', function() {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.toggle('mobile-open');
                
                // Animate nav links when opening
                if (navLinks.classList.contains('mobile-open')) {
                    const links = navLinks.querySelectorAll('.nav-link');
                    links.forEach((link, index) => {
                        link.style.opacity = '0';
                        link.style.transform = 'translateX(-20px)';
                        setTimeout(() => {
                            link.style.transition = 'all 0.3s ease';
                            link.style.opacity = '1';
                            link.style.transform = 'translateX(0)';
                        }, index * 100);
                    });
                }
            });
        }
    }

    // Intersection observer for performance optimization on mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        // Add scroll-triggered background color changes
        const sections = document.querySelectorAll('section');
        const colorObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    let hue = 240; // Default blue
                    
                    switch(sectionId) {
                        case 'game':
                            hue = 260; // Blue-purple
                            break;
                        case 'about':
                            hue = 280; // Purple
                            break;
                        case 'contact':
                            hue = 220; // Blue
                            break;
                    }
                    
                    document.documentElement.style.setProperty(
                        '--primary-color', 
                        `hsl(${hue}, 70%, 60%)`
                    );
                }
            });
        }, { threshold: 0.3 });
        
        sections.forEach(section => {
            if (section.id) colorObserver.observe(section);
        });
    }
});

// Matrix rain effect
function createMatrixRain() {
    const matrixContainer = document.querySelector('.matrix-rain');
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    // Create fewer columns for performance
    const numColumns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < numColumns; i++) {
        if (Math.random() > 0.7) { // Only create 30% of possible columns
            setTimeout(() => {
                createMatrixColumn(matrixContainer, characters, i * 20);
            }, Math.random() * 5000);
        }
    }
    
    // Regenerate columns periodically
    setInterval(() => {
        if (matrixContainer.children.length < 10) { // Limit number of active columns
            createMatrixColumn(matrixContainer, characters, Math.random() * window.innerWidth);
        }
    }, 3000);
}

function createMatrixColumn(container, characters, xPos) {
    const column = document.createElement('div');
    column.className = 'matrix-column';
    column.style.left = xPos + 'px';
    column.style.animationDuration = (Math.random() * 8 + 6) + 's';
    
    // Create a string of random characters
    let text = '';
    const length = Math.floor(Math.random() * 20) + 10;
    for (let i = 0; i < length; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
    }
    column.innerHTML = text;
    
    container.appendChild(column);
    
    // Remove column after animation
    setTimeout(() => {
        if (column.parentNode) {
            column.parentNode.removeChild(column);
        }
    }, 14000);
}

// Cyber scan effect
function createCyberScan() {
    const scan = document.createElement('div');
    scan.className = 'cyber-scan';
    document.body.appendChild(scan);
}

// Digital grid effect
function createDigitalGrid() {
    const grid = document.createElement('div');
    grid.className = 'digital-grid';
    document.body.appendChild(grid);
}