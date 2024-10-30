document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle menu on mobile
    hamburger.addEventListener('click', () => {
        hamburger.classListconst hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        .toggle('active');
        navMenu.classList.toggle('active');
    });

    // Ensure menu is always visible on desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navMenu.classList.remove('active'); // Always visible on desktop
        }
    });
});
