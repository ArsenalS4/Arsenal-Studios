// Secret Hack System
class HackSystem {
    constructor() {
        this.isActive = false;
        this.currentPuzzle = 0;
        this.solvedPuzzles = 0;
        this.puzzles = [
            {
                type: 'cipher',
                question: 'DECODE THE MESSAGE: DUVHQDO HASHULPHQW',
                answer: 'arsenal experiment',
                hint: 'Caesar cipher with shift of 3'
            },
            {
                type: 'sequence',
                question: 'COMPLETE THE SEQUENCE: 1, 1, 2, 3, 5, 8, ?',
                answer: '13',
                hint: 'Each number is the sum of the two preceding ones'
            },
            {
                type: 'matrix',
                question: 'UNSCRAMBLE THE CYBERPUNK TERM: ROHKCABE',
                answer: 'hacker',
                scrambled: 'ROHKCABE',
                hint: 'Someone who breaks into computer systems'
            },
            {
                type: 'binary',
                question: 'CONVERT BINARY TO ASCII: 01000001 01010010 01010011 01000101 01001110 01000001 01001100',
                answer: 'arsenal',
                hint: 'Each 8-bit sequence represents a character'
            },
            {
                type: 'logic',
                question: 'IF CYBER = 51245 AND PUNK = 7896, WHAT IS HACK?',
                answer: '1056',
                hint: 'Each letter has a consistent numeric value'
            }
        ];
        this.rewards = [
            {
                title: "Training Protocol Documentation",
                type: "image",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236366f1' font-family='monospace' font-size='16'%3ETraining Protocol Files%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='12'%3E[CLASSIFIED]%3C/text%3E%3C/svg%3E",
                description: "Classified military training protocols and subject behavioral analysis"
            },
            {
                title: "Operation Briefing - Truth Revealed",
                type: "video",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Cpolygon points='160,120 160,180 240,150' fill='%236366f1'/%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='12'%3EOperation Briefing [CLASSIFIED]%3C/text%3E%3C/svg%3E",
                description: "Hidden footage revealing the true nature of the training program"
            },
            {
                title: "Subject Communications Archive",
                type: "audio",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Ccircle cx='200' cy='150' r='80' fill='none' stroke='%236366f1' stroke-width='3'/%3E%3Ctext x='200' y='240' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='12'%3ESubject Audio Files%3C/text%3E%3C/svg%3E",
                description: "Real communications from controlled subjects during operations"
            },
            {
                title: "Military Base Schematics",
                type: "image",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Crect x='50' y='50' width='300' height='200' fill='none' stroke='%236366f1' stroke-width='2'/%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='14'%3EBase Blueprints%3C/text%3E%3C/svg%3E",
                description: "Classified facility layouts where the experiments took place"
            },
            {
                title: "Psychological Evaluation Reports",
                type: "video",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Crect x='100' y='100' width='200' height='100' fill='%23222' stroke='%236366f1'/%3E%3Cpolygon points='160,130 160,170 190,150' fill='%236366f1'/%3E%3Ctext x='200' y='230' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='12'%3EPsych Evaluations%3C/text%3E%3C/svg%3E",
                description: "Psychological impact assessments on both operators and subjects"
            }
        ];
        this.userAnswers = [];
    }

    init() {
        // Remove the automatic timer - now manually triggered only
    }

    initiateHack() {
        if (this.isActive) return;
        
        this.isActive = true;
        this.showHackInterface();
        this.startHackSequence();
    }

    showHackInterface() {
        const hackInterface = document.getElementById('hackInterface');
        hackInterface.style.display = 'flex';
        setTimeout(() => {
            hackInterface.classList.add('visible');
        }, 100);

        // Add event listeners
        this.bindEvents();
    }

    bindEvents() {
        const hackInput = document.getElementById('hackInput');
        const hackClose = document.querySelector('.hack-close');

        hackInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.processCommand(hackInput.value.trim());
                hackInput.value = '';
            }
        });

        hackClose.addEventListener('click', () => {
            this.closeHackInterface();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeHackInterface();
            }
        });
    }

    closeHackInterface() {
        const hackInterface = document.getElementById('hackInterface');
        hackInterface.classList.remove('visible');
        setTimeout(() => {
            hackInterface.style.display = 'none';
        }, 500);
        this.isActive = false;
    }

    startHackSequence() {
        const hackLog = document.getElementById('hackLog');
        const messages = [
            ">>> ACCESSING CLASSIFIED MILITARY DATABASE...",
            ">>> SUBJECT DESIGNATION: TACTICAL OPERATIVE",
            ">>> WARNING: UNAUTHORIZED ACCESS TO TRAINING PROTOCOLS",
            ">>> SIMULATION RECORDS DETECTED",
            ">>> TYPE 'START' TO ACCESS HIDDEN FILES"
        ];

        messages.forEach((msg, index) => {
            setTimeout(() => {
                const line = document.createElement('p');
                line.className = 'hack-line';
                line.textContent = msg;
                hackLog.appendChild(line);
                hackLog.scrollTop = hackLog.scrollHeight;
            }, (index + 1) * 1000);
        });
    }

    processCommand(command) {
        const hackLog = document.getElementById('hackLog');
        const userLine = document.createElement('p');
        userLine.className = 'hack-line';
        userLine.style.color = '#00ff00';
        userLine.textContent = `arsenal@security:~$ ${command}`;
        hackLog.appendChild(userLine);

        setTimeout(() => {
            this.handleCommand(command.toLowerCase());
        }, 500);
    }

    handleCommand(command) {
        const hackLog = document.getElementById('hackLog');
        
        if (command === 'start' && this.currentPuzzle === 0) {
            this.showPuzzle(0);
        } else if (command === 'help') {
            this.logMessage("Available commands: START, HELP, HINT, ANSWER [your answer]");
        } else if (command === 'hint') {
            if (this.currentPuzzle < this.puzzles.length) {
                this.logMessage(`HINT: ${this.puzzles[this.currentPuzzle].hint}`);
            }
        } else if (command.startsWith('answer ')) {
            const answer = command.substring(7);
            this.checkAnswer(answer);
        } else {
            this.logMessage("INVALID COMMAND. Type 'HELP' for available commands.");
        }

        hackLog.scrollTop = hackLog.scrollHeight;
    }

    logMessage(message) {
        const hackLog = document.getElementById('hackLog');
        const line = document.createElement('p');
        line.className = 'hack-line';
        line.textContent = `>>> ${message}`;
        hackLog.appendChild(line);
    }

    showPuzzle(puzzleIndex) {
        const puzzle = this.puzzles[puzzleIndex];
        const puzzleContainer = document.getElementById('puzzleContainer');
        
        this.logMessage(`PUZZLE ${puzzleIndex + 1}: ${puzzle.question}`);
        
        puzzleContainer.innerHTML = '';
        puzzleContainer.classList.add('active');

        if (puzzle.type === 'matrix') {
            this.createMatrixPuzzle(puzzle);
        } else if (puzzle.type === 'cipher') {
            this.createCipherPuzzle(puzzle);
        } else {
            this.createTextPuzzle(puzzle);
        }

        this.updateProgress();
    }

    createMatrixPuzzle(puzzle) {
        const container = document.getElementById('puzzleContainer');
        const scrambledWord = document.createElement('div');
        scrambledWord.className = 'scrambled-word';
        scrambledWord.textContent = puzzle.scrambled;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'cipher-input';
        input.placeholder = 'Enter the unscrambled word...';
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer(input.value.trim());
            }
        });
        
        container.appendChild(scrambledWord);
        container.appendChild(input);
        
        const hint = document.createElement('p');
        hint.className = 'puzzle-hint';
        hint.textContent = 'Unscramble the letters to reveal the cyberpunk term';
        container.appendChild(hint);
    }

    createCipherPuzzle(puzzle) {
        const container = document.getElementById('puzzleContainer');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'cipher-input';
        input.placeholder = 'Enter your decoded message...';
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer(input.value.trim());
            }
        });
        
        container.appendChild(input);
    }

    createTextPuzzle(puzzle) {
        const container = document.getElementById('puzzleContainer');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'cipher-input';
        input.placeholder = 'Enter your answer...';
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer(input.value.trim());
            }
        });
        
        container.appendChild(input);
    }

    handleMatrixClick(cell, puzzle) {
        // This method is no longer used for the word scramble puzzle
        // but keeping it for potential future matrix puzzles
    }

    checkAnswer(answer) {
        const puzzle = this.puzzles[this.currentPuzzle];
        
        if (answer.toLowerCase().trim() === puzzle.answer.toLowerCase().trim()) {
            this.puzzleSolved();
        } else {
            this.logMessage("INCORRECT. Try again or type 'HINT' for assistance.");
        }
    }

    puzzleSolved() {
        this.logMessage("PUZZLE SOLVED! ACCESS LEVEL INCREASED.");
        this.solvedPuzzles++;
        this.currentPuzzle++;
        
        const puzzleContainer = document.getElementById('puzzleContainer');
        puzzleContainer.classList.remove('active');
        
        this.updateProgress();
        
        if (this.currentPuzzle < this.puzzles.length) {
            setTimeout(() => {
                this.logMessage("NEXT CHALLENGE LOADING...");
                setTimeout(() => {
                    this.showPuzzle(this.currentPuzzle);
                }, 1000);
            }, 1000);
        } else {
            this.allPuzzlesSolved();
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const securityLevel = document.getElementById('securityLevel');
        
        const progress = (this.solvedPuzzles / this.puzzles.length) * 100;
        progressFill.style.width = `${progress}%`;
        securityLevel.textContent = this.solvedPuzzles + 1;
    }

    allPuzzlesSolved() {
        this.logMessage("ALL PUZZLES SOLVED!");
        this.logMessage("MAXIMUM SECURITY CLEARANCE ACHIEVED");
        this.logMessage("ACCESSING CLASSIFIED ARSENAL ARCHIVES...");
        
        setTimeout(() => {
            this.showRewards();
        }, 2000);
    }

    showRewards() {
        const rewardsGallery = document.getElementById('rewardsGallery');
        
        rewardsGallery.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: var(--accent-color); font-family: 'Orbitron', monospace;">
                    CLASSIFIED TRAINING ARCHIVES
                </h2>
                <p style="color: var(--primary-color);">
                    Access Granted: You've uncovered the truth behind the "simulations"
                </p>
            </div>
        `;

        this.rewards.forEach((reward, index) => {
            const rewardItem = document.createElement('div');
            rewardItem.className = 'reward-item';
            
            let contentHtml = '';
            if (reward.type === 'image') {
                contentHtml = `<img src="${reward.content}" alt="${reward.title}">`;
            } else if (reward.type === 'video') {
                contentHtml = `<img src="${reward.content}" alt="${reward.title}" style="cursor: pointer;" onclick="alert('Video player would open here')">`;
            } else if (reward.type === 'audio') {
                contentHtml = `<img src="${reward.content}" alt="${reward.title}" style="cursor: pointer;" onclick="alert('Audio player would open here')">`;
            }
            
            rewardItem.innerHTML = `
                <h3>${reward.title}</h3>
                ${contentHtml}
                <p style="color: var(--text-secondary);">${reward.description}</p>
            `;
            
            rewardsGallery.appendChild(rewardItem);
        });

        rewardsGallery.classList.add('visible');
        
        // Close button for rewards
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close Archives';
        closeBtn.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--accent-color);
            color: #000;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-family: 'Orbitron', monospace;
        `;
        closeBtn.addEventListener('click', () => {
            this.closeHackInterface();
        });
        rewardsGallery.appendChild(closeBtn);
    }
}

// Initialize hack system
export function initializeHackSystem() {
    const hackSystem = new HackSystem();
    hackSystem.init();
    
    // Make it available globally for button access
    window.hackSystem = hackSystem;
    
    // Create and add the hack access button
    createHackAccessButton(hackSystem);
}

function createHackAccessButton(hackSystem) {
    const hackButton = document.createElement('button');
    hackButton.id = 'hackAccessButton';
    hackButton.innerHTML = '<span>ACCESS CLASSIFIED FILES</span>';
    hackButton.className = 'hack-access-button';
    
    hackButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(45deg, var(--bg-darker), var(--border-color));
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        padding: 1rem 1.5rem;
        font-family: 'Orbitron', monospace;
        font-size: 0.9rem;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        z-index: 1000;
        border-radius: 3px;
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
        backdrop-filter: blur(10px);
        animation: hackButtonPulse 3s ease-in-out infinite;
    `;
    
    // Add hover and click effects
    hackButton.addEventListener('mouseenter', function() {
        this.style.background = 'var(--primary-color)';
        this.style.color = 'var(--bg-dark)';
        this.style.boxShadow = '0 0 20px var(--primary-color)';
        this.style.transform = 'translateY(-2px)';
    });
    
    hackButton.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(45deg, var(--bg-darker), var(--border-color))';
        this.style.color = 'var(--primary-color)';
        this.style.boxShadow = '0 0 10px rgba(99, 102, 241, 0.3)';
        this.style.transform = 'translateY(0)';
    });
    
    hackButton.addEventListener('click', function() {
        hackSystem.initiateHack();
        // Hide button once activated
        this.style.display = 'none';
    });
    
    // Add button animation styles
    if (!document.querySelector('#hack-button-styles')) {
        const style = document.createElement('style');
        style.id = 'hack-button-styles';
        style.textContent = `
            @keyframes hackButtonPulse {
                0%, 100% { 
                    box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
                    border-color: var(--primary-color);
                }
                50% { 
                    box-shadow: 0 0 25px rgba(99, 102, 241, 0.6);
                    border-color: var(--secondary-color);
                }
            }
            
            @media (max-width: 768px) {
                .hack-access-button {
                    bottom: 15px !important;
                    right: 15px !important;
                    padding: 0.8rem 1.2rem !important;
                    font-size: 0.8rem !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(hackButton);
}