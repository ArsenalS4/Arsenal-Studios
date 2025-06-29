// Import all JavaScript modules
// removed large monolithic JavaScript - see individual js files {}

// Core functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load all modules
    loadScript('js/core.js');
    loadScript('js/effects.js');
    loadScript('js/widgets.js');
    loadScript('js/spaceships.js');
});

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}