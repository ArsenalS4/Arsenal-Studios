import { initializeEffects } from './effects.js';
import { initializeAnimations } from './animations.js';
import { initializeNavigation } from './navigation.js';
import { initializeInteractions } from './interactions.js';
import { initializeCookies } from './cookies.js';
import { initializeGamesPage } from './games.js';
import { initializeHackSystem } from './hack-system.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initializeEffects();
    initializeAnimations();
    initializeNavigation();
    initializeInteractions();
    initializeCookies();
    initializeHackSystem();
    
    // Initialize games page if we're on it
    if (window.location.pathname.includes('games.html') || window.location.pathname.endsWith('/games')) {
        initializeGamesPage();
    }
});