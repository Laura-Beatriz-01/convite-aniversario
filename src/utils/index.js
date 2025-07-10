


// ...restante do código...
document.addEventListener('DOMContentLoaded', () => {
    const mapButton = document.getElementById('map-button');
    const whatsappButton = document.getElementById('whatsapp-button');
    // ...restante do código...
});


export const encodeWhatsAppMessage = (message) => {
    const baseUrl = 'https://wa.me/';
    const phoneNumber = '5581985381254'; // Replace with the actual phone number
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}${phoneNumber}?text=${encodedMessage}`;
};

export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
};