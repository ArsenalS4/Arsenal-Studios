// Widget functionality
function initWidgets() {
    createMatrixWidget();
    createAnalyticsWidget();
    initConnect5Game();
    initSystemMonitor();
    initWidgetControls();
}

function createMatrixWidget() {
    const matrixContent = document.getElementById('matrix-content');
    if (!matrixContent) return;
    
    const matrixChars = '0123456789ABCDEF';
    const specialChars = 'ARSENAL EXPERIMENT MATRIX NEURAL SYNC';
    
    setInterval(() => {
        if (document.getElementById('matrix-widget').closest('.widget-container.hidden')) return;
        
        // Generate matrix-style data with more variety
        const lineTypes = [
            () => Array(12).fill().map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]).join(' '),
            () => `${Math.random().toString(16).substr(2, 8).toUpperCase()}`,
            () => `SYS_${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`,
            () => `0x${Math.random().toString(16).substr(2, 6).toUpperCase()}`,
            () => Array(6).fill().map(() => Math.floor(Math.random() * 2)).join(' '),
            () => specialChars.split(' ')[Math.floor(Math.random() * specialChars.split(' ').length)],
            () => `EXP_${Math.floor(Math.random() * 999)}`,
            () => `[${Array(4).fill().map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]).join('')}]`,
        ];
        
        const randomLine = lineTypes[Math.floor(Math.random() * lineTypes.length)]();
        const matrixLine = document.createElement('div');
        matrixLine.className = 'matrix-line';
        matrixLine.textContent = randomLine;
        
        matrixContent.appendChild(matrixLine);
        
        if (matrixContent.children.length > 10) {
            matrixContent.removeChild(matrixContent.firstChild);
        }
    }, 100);
}

function createAnalyticsWidget() {
    // Update metrics periodically
    setInterval(() => {
        if (document.getElementById('analytics-widget').closest('.widget-container.hidden')) return;
        
        document.getElementById('visitors').textContent = Math.floor(Math.random() * 500 + 1500);
        document.getElementById('engagement').textContent = (Math.random() * 40 + 60).toFixed(1) + '%';
        document.getElementById('neural').textContent = (Math.random() * 10 + 90).toFixed(1) + '%';
        document.getElementById('bandwidth').textContent = (Math.random() * 50 + 10).toFixed(1) + ' MB/s';
    }, 1000);
    
    // Update second analytics widget
    setInterval(() => {
        const widget2 = document.getElementById('analytics-widget-2');
        if (!widget2 || widget2.closest('.widget-container.hidden')) return;
        
        document.getElementById('core-temp').textContent = Math.floor(Math.random() * 20 + 45) + '°C';
        document.getElementById('power-draw').textContent = Math.floor(Math.random() * 100 + 200) + 'W';
        document.getElementById('sync-rate').textContent = (Math.random() * 5 + 95).toFixed(1) + '%';
        document.getElementById('stability').textContent = (Math.random() * 3 + 97).toFixed(1) + '%';
    }, 1500);
}

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

function initWidgetControls() {
    const closeButtons = document.querySelectorAll('.widget-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const widgetContainer = this.closest('.widget-container');
            widgetContainer.classList.add('hidden');
        });
    });
}