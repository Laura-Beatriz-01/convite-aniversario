// Slide de background com 7 imagens
document.addEventListener('DOMContentLoaded', () => {
    const imagens = [
        'img/borboletas/1.png',
        'img/borboletas/2.png',
        'img/borboletas/3.png',
        'img/borboletas/4.png',
        'img/borboletas/5.png',
        'img/borboletas/6.png',
    ];
    const slideshow = document.querySelector('.slide-overlay');
    imagens.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        if (i === 0) img.classList.add('active');
        slideshow.appendChild(img);
    });

    let idx = 0;
    setInterval(() => {
        const imgs = slideshow.querySelectorAll('img');
        imgs[idx].classList.remove('active');
        idx = (idx + 1) % imagens.length;
        imgs[idx].classList.add('active');
    }, 3000); // Troca a cada 3 segundos

    // Slide de prints de textos
const textos = [
    'img/texto/1.png',
    'img/texto/2.png',
    'img/texto/3.png',
    'img/texto/4.png',
    'img/texto/5.png',
    'img/texto/6.png',
    'img/texto/7.png'
];
const textoSlideshow = document.querySelector('.texto');
textos.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    if (i === 0) img.classList.add('active');
    textoSlideshow.appendChild(img);
});

let textoIdx = 0;
setInterval(() => {
    const imgs = textoSlideshow.querySelectorAll('img');
    imgs.forEach((img) => img.classList.remove('active'));
    textoIdx++;
    if (textoIdx >= textos.length) {
        window.location.href = '/convite-aniversario/pagina_confirmacao.html'; // Troque pelo endereço desejado
        return;
    }
    imgs[textoIdx].classList.add('active');
}, 8000); // Troca a cada 6 segundos


});