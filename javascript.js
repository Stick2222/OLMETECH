document.addEventListener('DOMContentLoaded', () => {
    // Manejo del botón de contacto
    const contactButton = document.getElementById('contactButton');

    contactButton.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Me pondré en contacto contigo pronto.');
    });

    // Desplazamiento suave al hacer clic en los enlaces del menú
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});