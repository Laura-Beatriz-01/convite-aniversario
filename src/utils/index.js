// This file contains utility functions for the landing page project. 

export const encodeWhatsAppMessage = (message) => {
    const baseUrl = 'https://wa.me/';
    const phoneNumber = '5511999999999'; // Replace with the actual phone number
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}${phoneNumber}?text=${encodedMessage}`;
};

export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
};