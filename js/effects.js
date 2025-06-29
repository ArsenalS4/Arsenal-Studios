// Visual effects and background animations
function initEffects() {
    createParticles();
    createCodeRain();
    createDataStream();
    createSystemMonitor();
    createFloatingElements();
    initCursorEffects();
    initGameImageEffects();
    initButtonEffects();
    initColorPulse();

    // Restart particle effect every 10 seconds
    setInterval(createParticles, 10000);
}

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
            
            const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 8000);
        }, i * 100);
    }
}

function createCodeRain() {
    const codeRainContainer = document.createElement('div');
    codeRainContainer.className = 'code-rain';
    document.body.appendChild(codeRainContainer);

    const codeChars = '01ARSENAL{}[]()<>EXPERIMENT∆∇∞⟨⟩⟪⟫░▒▓█';
    
    for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.className = 'code-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDelay = Math.random() * 4 + 's';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        let columnText = '';
        for (let j = 0; j < 20; j++) {
            columnText += codeChars[Math.floor(Math.random() * codeChars.length)] + '<br>';
        }
        column.innerHTML = columnText;
        
        codeRainContainer.appendChild(column);
    }
}

function createDataStream() {
    const dataStream = document.createElement('div');
    dataStream.className = 'data-stream';
    dataStream.innerHTML = `
        <div style="color: var(--electric-blue); margin-bottom: 10px; font-weight: bold;">ARSENAL.SYS</div>
        <div id="data-content"></div>
    `;
    document.body.appendChild(dataStream);

    const dataContent = document.getElementById('data-content');
    const dataTypes = [
        'NEURAL_LINK: ACTIVE',
        'SYNC_RATE: 97.3%',
        'MEMORY_CORE: STABLE',
        'FIREWALL: ENABLED',
        'EXPERIMENT_STATUS: RUNNING',
        'PLAYER_COUNT: 1',
        'AI_RESPONSE: OPTIMAL',
        'THREAT_LEVEL: MINIMAL',
        'SYSTEM_INTEGRITY: 98%',
        'QUANTUM_STATE: COHERENT'
    ];

    setInterval(() => {
        const randomData = dataTypes[Math.floor(Math.random() * dataTypes.length)];
        const dataLine = document.createElement('div');
        dataLine.className = 'data-line';
        dataLine.textContent = '> ' + randomData;
        dataLine.style.animationDelay = '0s';
        
        dataContent.appendChild(dataLine);
        
        if (dataContent.children.length > 15) {
            dataContent.removeChild(dataContent.firstChild);
        }
    }, 500);
}

function createSystemMonitor() {
    const monitor = document.createElement('div');
    monitor.className = 'system-monitor';
    monitor.innerHTML = `
        <div style="color: var(--electric-blue); margin-bottom: 10px; font-weight: bold;">SYS_MONITOR</div>
        <div class="monitor-line">
            <span>CPU:</span>
            <div class="progress-bar"><div class="progress-fill"></div></div>
        </div>
        <div class="monitor-line">
            <span>GPU:</span>
            <div class="progress-bar"><div class="progress-fill" style="animation-delay: 0.5s;"></div></div>
        </div>
        <div class="monitor-line">
            <span>MEM:</span>
            <div class="progress-bar"><div class="progress-fill" style="animation-delay: 1s;"></div></div>
        </div>
        <div class="monitor-line">
            <span>NET:</span>
            <div class="progress-bar"><div class="progress-fill" style="animation-delay: 1.5s;"></div></div>
        </div>
        <div style="margin-top: 10px; font-size: 10px; color: var(--accent-color);">
            UPTIME: ${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)}
        </div>
    `;
    document.body.appendChild(monitor);
}

function createFloatingElements() {
    const hero = document.querySelector('.hero');
    if (hero) {
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.left = Math.random() * 100 + '%';
            element.style.top = Math.random() * 100 + '%';
            element.style.animationDelay = Math.random() * 6 + 's';
            element.style.animationDuration = (Math.random() * 4 + 4) + 's';
            hero.appendChild(element);
        }
    }
}

function initCursorEffects() {
    // Cursor trail effect
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
}

function initGameImageEffects() {
    // Add holographic effect to game image
    const gameImageContainer = document.querySelector('.game-image-container');
    if (gameImageContainer) {
        gameImageContainer.classList.add('hologram');
    }

    // Add scan line effect to game image
    const gameImage = document.querySelector('.game-image');
    if (gameImage) {
        setInterval(() => {
            const scanLine = document.createElement('div');
            scanLine.style.cssText = `
                position: absolute;
                top: ${Math.random() * 100}%;
                left: 0;
                width: 100%;
                height: 2px;
                background: var(--primary-color);
                opacity: 0.8;
                animation: scanMove 0.5s ease-out forwards;
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
            }, 500);
        }, 2000);
    }
}

function initButtonEffects() {
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
}

function initColorPulse() {
    // Dynamic color pulse effect
    window.addEventListener('scroll', function() {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const hue = 260 + (scrollPercent * 60);
        
        document.documentElement.style.setProperty('--primary-color', `hsl(${hue}, 70%, 60%)`);
        document.documentElement.style.setProperty('--secondary-color', `hsl(${hue + 40}, 80%, 55%)`);
    });
}

// Data Stream Widget Styles (used by createDataStream)
const dataStreamStyles = `
    .data-stream {
        position: fixed;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 200px;
        height: 300px;
        background: rgba(10, 10, 10, 0.8);
        border: 1px solid var(--primary-color);
        border-radius: 5px;
        padding: 1rem;
        font-family: 'Space Mono', monospace;
        font-size: 10px;
        color: var(--primary-color);
        z-index: 50;
        overflow: hidden;
        backdrop-filter: blur(10px);
    }

    .data-line {
        margin-bottom: 2px;
        opacity: 0;
        animation: dataAppear 0.1s ease forwards;
    }

    @keyframes dataAppear {
        to { opacity: 1; }
    }
`;

// Add styles to document
if (!document.querySelector('#data-stream-styles')) {
    const style = document.createElement('style');
    style.id = 'data-stream-styles';
    style.textContent = dataStreamStyles;
    document.head.appendChild(style);
}