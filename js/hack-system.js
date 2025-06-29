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
                title: "Early Concept Art - Character Design",
                type: "image",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236366f1' font-family='monospace' font-size='16'%3ECharacter Concept Art%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='12'%3E[CLASSIFIED]%3C/text%3E%3C/svg%3E",
                description: "Exclusive early character designs from The Arsenal Experiment"
            },
            {
                title: "Behind the Scenes - Development Footage",
                type: "video",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Cpolygon points='160,120 160,180 240,150' fill='%236366f1'/%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='12'%3EDev Footage [CLASSIFIED]%3C/text%3E%3C/svg%3E",
                description: "Rare development footage showing early gameplay mechanics"
            },
            {
                title: "Exclusive Soundtrack Preview",
                type: "audio",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Ccircle cx='200' cy='150' r='80' fill='none' stroke='%236366f1' stroke-width='3'/%3E%3Ctext x='200' y='240' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='12'%3ESecret Soundtrack%3C/text%3E%3C/svg%3E",
                description: "Unreleased cyberpunk soundtrack tracks"
            },
            {
                title: "Level Design Documents",
                type: "image",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Crect x='50' y='50' width='300' height='200' fill='none' stroke='%236366f1' stroke-width='2'/%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='14'%3ELevel Blueprints%3C/text%3E%3C/svg%3E",
                description: "Secret level design documents and maps"
            },
            {
                title: "Developer Commentary Video",
                type: "video",
                content: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Crect x='100' y='100' width='200' height='100' fill='%23222' stroke='%236366f1'/%3E%3Cpolygon points='160,130 160,170 190,150' fill='%236366f1'/%3E%3Ctext x='200' y='230' text-anchor='middle' fill='%238b5cf6' font-family='monospace' font-size='12'%3EDev Commentary%3C/text%3E%3C/svg%3E",
                description: "Exclusive developer insights and commentary"
            }
        ];
        this.userAnswers = [];
    }

    init() {
        // Start the hack sequence after 1 minute
        setTimeout(() => {
            this.initiateHack();
        }, 60000);
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
            ">>> SCANNING NEURAL PATTERNS...",
            ">>> SUBJECT CLASSIFICATION: UNKNOWN",
            ">>> INITIALIZING COGNITIVE CHALLENGE PROTOCOL",
            ">>> FIRST PUZZLE ACTIVATED",
            ">>> TYPE 'START' TO BEGIN THE TRIALS"
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
                    CLASSIFIED ARSENAL ARCHIVES
                </h2>
                <p style="color: var(--primary-color);">
                    Congratulations! You've unlocked exclusive development content.
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
    
    // Make it available globally for debugging
    window.hackSystem = hackSystem;
}