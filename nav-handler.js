    // Obtener todos los enlaces del menú
    const navLinks = document.querySelectorAll('.nav-link');

    // Añadir un evento 'click' a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {

            // Remover la clase 'active' de todos los enlaces
            navLinks.forEach(link => link.classList.remove('active'));

            // Añadir la clase 'active' al enlace que se clickeó
            this.classList.add('active');
        });
    });

    // Menu toggle para versión móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });