// This file contains the JavaScript logic for the interactive landing page.
// It implements functionalities such as redirections to Google Maps and WhatsApp, 
// as well as simple animations.

document.addEventListener('DOMContentLoaded', () => {
    const mapButton = document.getElementById('map-button');
    const whatsappButton = document.getElementById('whatsapp-button');

    // Redirect to Google Maps on button click
    mapButton.addEventListener('click', () => {
        window.open('https://www.google.com/maps?q=local+da+festa', '_blank');
    });

    // Redirect to WhatsApp on button click
    whatsappButton.addEventListener('click', () => {
        const message = encodeURIComponent('Olá! Gostaria de confirmar minha presença na festa!');
        window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    });

    // Simple animation for buttons on hover
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});