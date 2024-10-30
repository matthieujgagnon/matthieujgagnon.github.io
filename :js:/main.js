document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle menu on mobile only
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Ensure menu resets properly on desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navMenu.classList.remove('active'); // Ensure the menu is visible on desktop
            navMenu.style.display = 'flex'; // Keeps it static on desktop
        }
    });
});
