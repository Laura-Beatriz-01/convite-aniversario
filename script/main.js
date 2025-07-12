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
});