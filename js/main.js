document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(isActive));
    };

    hamburger.addEventListener('click', toggleMenu);

    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });

    // Close the mobile menu after navigating to a link
    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Close the mobile menu on Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    // Reset menu state when resizing into desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });

    // Contact form: hand off to the visitor's own email client via mailto:
    const contactForm = document.getElementById('contact-form');
    const contactEmail = 'matthieujgagnon@me.com';

    if (contactForm) {
        const formStatus = document.getElementById('form-status');

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const firstName = document.getElementById('first-name').value.trim();
            const lastName = document.getElementById('last-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const subject = `Message from ${firstName} ${lastName} via portfolio site`;
            const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;

            const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            if (formStatus) {
                formStatus.textContent = 'Opening your email app…';
            }

            window.location.href = mailtoUrl;
        });
    }
});
