// Slide de background com 7 imagens
document.addEventListener('DOMContentLoaded', () => {
    const imagens = [
        'img/1.png',
        'img/2.png',
        'img/3.png',
        'img/4.png',
        'img/5.png',
        'img/6.png',
        'img/7.png'
    ];
    const slideshow = document.querySelector('.background-slideshow');
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
    }, 4000); // Troca a cada 4 segundos
});