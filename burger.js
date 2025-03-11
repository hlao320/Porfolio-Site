document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navContent = document.querySelector('.nav-content');
    const navLinks = document.querySelectorAll('.nav-links a');
    const body = document.body;

    // Toggle menu when clicking burger
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navContent.classList.toggle('active');
        body.classList.toggle('menu-open'); // Prevent body scroll when menu is open
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navContent.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navContent.contains(e.target) && !burgerMenu.contains(e.target)) {
            burgerMenu.classList.remove('active');
            navContent.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Prevent menu from closing when clicking inside nav-content
    navContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

    // Prevent menu from closing when clicking inside nav-content
    navContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });