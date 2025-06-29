// Spaceship game system
function initSpaceships() {
    const container = document.getElementById('spaceships-container');
    if (!container) return;
    
    const spaceships = [];
    const lasers = [];
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Check for laser-cursor collisions
        checkLaserCursorCollisions();
    });
    
    function checkLaserCursorCollisions() {
        for (let i = lasers.length - 1; i >= 0; i--) {
            const laser = lasers[i];
            const dx = mouseX - laser.x;
            const dy = mouseY - laser.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 20) {
                // Create cursor explosion
                createCursorExplosion(laser.x, laser.y);
                laser.element.remove();
                lasers.splice(i, 1);
            }
        }
    }
    
    function createCursorExplosion(x, y) {
        const explosion = document.createElement('div');
        explosion.className = 'cursor-explosion';
        explosion.style.left = (x - 20) + 'px';
        explosion.style.top = (y - 20) + 'px';
        
        container.appendChild(explosion);
        
        setTimeout(() => {
            explosion.remove();
        }, 300);
    }
    
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
        
        // Add multiple explosion particles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    width: 4px;
                    height: 4px;
                    background: var(--neon-pink);
                    border-radius: 50%;
                    left: ${ship.x + (Math.random() - 0.5) * 40}px;
                    top: ${ship.y + (Math.random() - 0.5) * 40}px;
                    z-index: 10;
                    animation: explodeParticle 0.8s ease-out forwards;
                    box-shadow: 0 0 10px var(--neon-pink);
                `;
                
                if (!document.querySelector('#explode-particle-animation')) {
                    const style = document.createElement('style');
                    style.id = 'explode-particle-animation';
                    style.textContent = `
                        @keyframes explodeParticle {
                            0% { opacity: 1; transform: scale(1) translate(0, 0); }
                            100% { opacity: 0; transform: scale(0.2) translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px); }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                container.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 800);
            }, i * 50);
        }
        
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