import React from 'react';

const InvitationCard = ({ greeting, birthdayPerson, age, date, time, location }) => {
    return (
        <div className="invitation-card">
            <h1>{greeting}</h1>
            <h2>{birthdayPerson} está fazendo {age} anos!</h2>
            <p>Data: {date}</p>
            <p>Horário: {time}</p>
            <p>Local: {location}</p>
            <div className="buttons">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`} target="_blank" rel="noopener noreferrer">
                    <button>Ver no Google Maps</button>
                </a>
                <a href={`https://wa.me/?text=Estou%20indo%20para%20a%20festa%20do%20${birthdayPerson}!`} target="_blank" rel="noopener noreferrer">
                    <button>Enviar pelo WhatsApp</button>
                </a>
            </div>
        </div>
    );
};

export default InvitationCard;