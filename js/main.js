import { initializeEffects } from './effects.js';
import { initializeAnimations } from './animations.js';
import { initializeNavigation } from './navigation.js';
import { initializeInteractions } from './interactions.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initializeEffects();
    initializeAnimations();
    initializeNavigation();
    initializeInteractions();
});