// Matrix rain effect
export function createMatrixRain() {
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
export function createCyberScan() {
    const scan = document.createElement('div');
    scan.className = 'cyber-scan';
    document.body.appendChild(scan);
}

// Digital grid effect
export function createDigitalGrid() {
    const grid = document.createElement('div');
    grid.className = 'digital-grid';
    document.body.appendChild(grid);
}

// Random glitch effects
export function initializeGlitchEffects() {
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
}

// Scan line effect for game image
export function initializeScanLines() {
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
}

// Dynamic background color change
export function initializeColorTransitions() {
    // Reduced dynamic background color change intensity
    window.addEventListener('scroll', function() {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const hue = 240 + (scrollPercent * 30); // Blue to purple range
        
        document.documentElement.style.setProperty('--primary-color', `hsl(${hue}, 70%, 60%)`);
    });

    // Section-based color changes
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
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
}

// Initialize all effects
export function initializeEffects() {
    createMatrixRain();
    createCyberScan();
    createDigitalGrid();
    initializeGlitchEffects();
    initializeScanLines();
    initializeColorTransitions();
}