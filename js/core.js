// Core functionality and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavigation();
    initAnimations();
    initEffects();
    initWidgets();
    initSpaceships();
});

function initNavigation() {
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
}

function initAnimations() {
    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const gameSection = document.querySelector('.game-section');
    const aboutSection = document.querySelector('.about-section');
    const contactSection = document.querySelector('.contact-section');

    // Add fade-in class to sections
    if (gameSection) {
        gameSection.classList.add('fade-in');
        observer.observe(gameSection);
    }

    if (aboutSection) {
        aboutSection.classList.add('fade-in');
        observer.observe(aboutSection);
    }

    if (contactSection) {
        contactSection.classList.add('fade-in');
        observer.observe(contactSection);
    }

    // Animate game showcase elements
    const gameVisual = document.querySelector('.game-visual');
    const gameInfo = document.querySelector('.game-info');

    if (gameVisual && gameInfo) {
        gameVisual.classList.add('slide-in-left');
        gameInfo.classList.add('slide-in-right');
        observer.observe(gameVisual);
        observer.observe(gameInfo);
    }

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

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

function initEffects() {
    // Create particles
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

    createParticles();

    // Create code rain effect
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

    createCodeRain();

    // Create data stream widget
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

    createDataStream();

    // Create system monitor widget
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

    createSystemMonitor();

    // Create floating 3D elements
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

    createFloatingElements();
}

function initWidgets() {
    // Create Matrix Numbers Widget
    function createMatrixWidget() {
        const matrixContent = document.getElementById('matrix-content');
        if (!matrixContent) return;
        
        const matrixChars = '0123456789ABCDEF';
        
        setInterval(() => {
            if (document.getElementById('matrix-widget').closest('.widget-container.hidden')) return;
            
            // Generate matrix-style data
            const lineTypes = [
                () => Array(16).fill().map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]).join(''),
                () => `${Math.random().toString(16).substr(2, 8).toUpperCase()}`,
                () => `SYS_${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`,
                () => `0x${Math.random().toString(16).substr(2, 6).toUpperCase()}`,
                () => Array(8).fill().map(() => Math.floor(Math.random() * 2)).join(''),
            ];
            
            const randomLine = lineTypes[Math.floor(Math.random() * lineTypes.length)]();
            const matrixLine = document.createElement('div');
            matrixLine.className = 'matrix-line';
            matrixLine.textContent = randomLine;
            
            matrixContent.appendChild(matrixLine);
            
            if (matrixContent.children.length > 12) {
                matrixContent.removeChild(matrixContent.firstChild);
            }
        }, 150);
    }

    createMatrixWidget();

    // Create Analytics Widget
    function createAnalyticsWidget() {
        // Update metrics periodically
        setInterval(() => {
            if (document.getElementById('analytics-widget').closest('.widget-container.hidden')) return;
            
            document.getElementById('visitors').textContent = Math.floor(Math.random() * 500 + 1500);
            document.getElementById('engagement').textContent = (Math.random() * 40 + 60).toFixed(1) + '%';
            document.getElementById('neural').textContent = (Math.random() * 10 + 90).toFixed(1) + '%';
            document.getElementById('bandwidth').textContent = (Math.random() * 50 + 10).toFixed(1) + ' MB/s';
        }, 1000);
    }

    createAnalyticsWidget();

    // Connect 5 Game
    function initConnect5Game() {
        const grid = document.getElementById('connect5-grid');
        const status = document.getElementById('game-status');
        const resetBtn = document.getElementById('reset-game');
        
        if (!grid || !status || !resetBtn) return;
        
        let board = Array(6).fill().map(() => Array(7).fill(0));
        let currentPlayer = 1;
        let gameActive = true;
        
        function createBoard() {
            grid.innerHTML = '';
            for (let row = 0; row < 6; row++) {
                for (let col = 0; col < 7; col++) {
                    const cell = document.createElement('div');
                    cell.className = 'connect5-cell';
                    cell.dataset.row = row;
                    cell.dataset.col = col;
                    cell.addEventListener('click', () => makeMove(col));
                    grid.appendChild(cell);
                }
            }
        }
        
        function updateBoard() {
            const cells = document.querySelectorAll('.connect5-cell');
            cells.forEach(cell => {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                cell.className = 'connect5-cell';
                if (board[row][col] === 1) cell.classList.add('player');
                if (board[row][col] === 2) cell.classList.add('computer');
            });
        }
        
        function makeMove(col) {
            if (!gameActive || currentPlayer !== 1) return;
            
            for (let row = 5; row >= 0; row--) {
                if (board[row][col] === 0) {
                    board[row][col] = 1;
                    updateBoard();
                    
                    if (checkWin(1)) {
                        status.textContent = 'You Win!';
                        gameActive = false;
                        return;
                    }
                    
                    currentPlayer = 2;
                    status.textContent = 'Computer thinking...';
                    
                    setTimeout(computerMove, 500);
                    return;
                }
            }
        }
        
        function computerMove() {
            if (!gameActive) return;
            
            // Simple AI - try to win, block player, or random
            let bestCol = -1;
            
            // Try to win
            for (let col = 0; col < 7; col++) {
                if (canMove(col)) {
                    const row = getLowestRow(col);
                    board[row][col] = 2;
                    if (checkWin(2)) {
                        bestCol = col;
                        board[row][col] = 0;
                        break;
                    }
                    board[row][col] = 0;
                }
            }
            
            // Try to block player
            if (bestCol === -1) {
                for (let col = 0; col < 7; col++) {
                    if (canMove(col)) {
                        const row = getLowestRow(col);
                        board[row][col] = 1;
                        if (checkWin(1)) {
                            bestCol = col;
                            board[row][col] = 0;
                            break;
                        }
                        board[row][col] = 0;
                    }
                }
            }
            
            // Random move
            if (bestCol === -1) {
                const validCols = [];
                for (let col = 0; col < 7; col++) {
                    if (canMove(col)) validCols.push(col);
                }
                if (validCols.length > 0) {
                    bestCol = validCols[Math.floor(Math.random() * validCols.length)];
                }
            }
            
            if (bestCol !== -1) {
                const row = getLowestRow(bestCol);
                board[row][bestCol] = 2;
                updateBoard();
                
                if (checkWin(2)) {
                    status.textContent = 'Computer Wins!';
                    gameActive = false;
                    return;
                }
                
                currentPlayer = 1;
                status.textContent = 'Your turn';
            }
        }
        
        function canMove(col) {
            return board[0][col] === 0;
        }
        
        function getLowestRow(col) {
            for (let row = 5; row >= 0; row--) {
                if (board[row][col] === 0) return row;
            }
            return -1;
        }
        
        function checkWin(player) {
            // Check horizontal, vertical, and diagonal
            for (let row = 0; row < 6; row++) {
                for (let col = 0; col < 7; col++) {
                    if (board[row][col] === player) {
                        // Check all directions
                        const directions = [[0,1], [1,0], [1,1], [1,-1]];
                        for (let [dr, dc] of directions) {
                            let count = 1;
                            // Check positive direction
                            for (let i = 1; i < 5; i++) {
                                const newRow = row + dr * i;
                                const newCol = col + dc * i;
                                if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 && board[newRow][newCol] === player) {
                                    count++;
                                } else break;
                            }
                            // Check negative direction
                            for (let i = 1; i < 5; i++) {
                                const newRow = row - dr * i;
                                const newCol = col - dc * i;
                                if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 && board[newRow][newCol] === player) {
                                    count++;
                                } else break;
                            }
                            if (count >= 5) return true;
                        }
                    }
                }
            }
            return false;
        }
        
        function resetGame() {
            board = Array(6).fill().map(() => Array(7).fill(0));
            currentPlayer = 1;
            gameActive = true;
            status.textContent = 'Your turn';
            updateBoard();
        }
        
        resetBtn.addEventListener('click', resetGame);
        createBoard();
    }

    initConnect5Game();

    // System Monitor with Interactive Uptime
    function initSystemMonitor() {
        const uptimeElement = document.getElementById('uptime');
        if (!uptimeElement) return;
        
        let startTime = Date.now();
        
        setInterval(() => {
            if (document.getElementById('system-monitor').closest('.widget-container.hidden')) return;
            
            const elapsed = Date.now() - startTime;
            const hours = Math.floor(elapsed / 3600000);
            const minutes = Math.floor((elapsed % 3600000) / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            
            uptimeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    initSystemMonitor();

    // Widget Close Functionality
    function initWidgetControls() {
        const closeButtons = document.querySelectorAll('.widget-close');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const widgetContainer = this.closest('.widget-container');
                widgetContainer.classList.add('hidden');
            });
        });
    }

    initWidgetControls();
}

function initSpaceships() {
    const container = document.getElementById('spaceships-container');
    if (!container) return;
    
    const spaceships = [];
    const lasers = [];
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function createSpaceship() {
        const spaceship = document.createElement('div');
        spaceship.className = 'spaceship';
        
        // Random spawn position on edges
        const edge = Math.floor(Math.random() * 4);
        let x, y, vx, vy;
        
        switch(edge) {
            case 0: // top
                x = Math.random() * window.innerWidth;
                y = -30;
                vx = (Math.random() - 0.5) * 2;
                vy = Math.random() * 2 + 1;
                break;
            case 1: // right
                x = window.innerWidth + 30;
                y = Math.random() * window.innerHeight;
                vx = -(Math.random() * 2 + 1);
                vy = (Math.random() - 0.5) * 2;
                break;
            case 2: // bottom
                x = Math.random() * window.innerWidth;
                y = window.innerHeight + 30;
                vx = (Math.random() - 0.5) * 2;
                vy = -(Math.random() * 2 + 1);
                break;
            case 3: // left
                x = -30;
                y = Math.random() * window.innerHeight;
                vx = Math.random() * 2 + 1;
                vy = (Math.random() - 0.5) * 2;
                break;
        }
        
        spaceship.style.left = x + 'px';
        spaceship.style.top = y + 'px';
        
        const shipData = {
            element: spaceship,
            x, y, vx, vy,
            lastShot: 0
        };
        
        spaceship.addEventListener('click', () => explodeShip(shipData));
        
        container.appendChild(spaceship);
        spaceships.push(shipData);
    }
    
    function updateSpaceships() {
        for (let i = spaceships.length - 1; i >= 0; i--) {
            const ship = spaceships[i];
            
            // Move towards cursor occasionally
            if (Math.random() < 0.02) {
                const dx = mouseX - ship.x;
                const dy = mouseY - ship.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > 0) {
                    ship.vx += (dx / dist) * 0.1;
                    ship.vy += (dy / dist) * 0.1;
                }
            }
            
            ship.x += ship.vx;
            ship.y += ship.vy;
            
            ship.element.style.left = ship.x + 'px';
            ship.element.style.top = ship.y + 'px';
            
            // Shoot at cursor occasionally
            if (Date.now() - ship.lastShot > 2000 && Math.random() < 0.01) {
                shootLaser(ship);
                ship.lastShot = Date.now();
            }
            
            // Remove if off screen
            if (ship.x < -50 || ship.x > window.innerWidth + 50 || 
                ship.y < -50 || ship.y > window.innerHeight + 50) {
                ship.element.remove();
                spaceships.splice(i, 1);
            }
        }
    }
    
    function shootLaser(ship) {
        const laser = document.createElement('div');
        laser.className = 'laser';
        
        const dx = mouseX - ship.x;
        const dy = mouseY - ship.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        laser.style.left = ship.x + 'px';
        laser.style.top = ship.y + 'px';
        
        const laserData = {
            element: laser,
            x: ship.x,
            y: ship.y,
            vx: (dx / dist) * 5,
            vy: (dy / dist) * 5
        };
        
        container.appendChild(laser);
        lasers.push(laserData);
    }
    
    function updateLasers() {
        for (let i = lasers.length - 1; i >= 0; i--) {
            const laser = lasers[i];
            
            laser.x += laser.vx;
            laser.y += laser.vy;
            
            laser.element.style.left = laser.x + 'px';
            laser.element.style.top = laser.y + 'px';
            
            // Remove if off screen
            if (laser.x < 0 || laser.x > window.innerWidth || 
                laser.y < 0 || laser.y > window.innerHeight) {
                laser.element.remove();
                lasers.splice(i, 1);
            }
        }
    }
    
    function explodeShip(ship) {
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        explosion.style.left = (ship.x - 30) + 'px';
        explosion.style.top = (ship.y - 30) + 'px';
        
        container.appendChild(explosion);
        
        setTimeout(() => {
            explosion.remove();
        }, 500);
        
        ship.element.remove();
        const index = spaceships.indexOf(ship);
        if (index > -1) {
            spaceships.splice(index, 1);
        }
    }
    
    // Game loop
    function gameLoop() {
        updateSpaceships();
        updateLasers();
        
        // Spawn new spaceships
        if (Math.random() < 0.005 && spaceships.length < 5) {
            createSpaceship();
        }
        
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
    
    // Initial spaceships
    for (let i = 0; i < 2; i++) {
        setTimeout(() => createSpaceship(), i * 2000);
    }
}