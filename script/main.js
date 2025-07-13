document.addEventListener('DOMContentLoaded', () => {
    // Slide de background
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
    }, 3000);

    // Slide de textos
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

    // Função para tocar o vídeo do Vimeo
    function playVimeo() {
        const iframe = document.querySelector('iframe[src*="vimeo.com"]');
        if (iframe) {
            iframe.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
        }
    }

    let textoIdx = 0;
    setInterval(() => {
        const imgs = textoSlideshow.querySelectorAll('img');
        imgs.forEach((img) => img.classList.remove('active'));
        textoIdx++;
        if (textoIdx >= textos.length) {
            window.location.href = 'pagina_confirmacao.html';
            return;
        }
        imgs[textoIdx].classList.add('active');
        if (textoIdx === 0) {
            playVimeo();
        }
    }, 8000);

    // Modal de confirmação
    const modalHtml = `
        <div id="modal-confirmacao">
            <div class="modal-content">
                <h2>Confirmação de Presença</h2>
                <p>Ao confirmar, você será redirecionado para o WhatsApp para finalizar sua confirmação.</p>
                <button id="btn-confirmar-modal">confirmar</button>
            </div>
        </div>
    `;

    const btnConfirmacao = document.querySelector('.atalho-confirmacao');
    if (btnConfirmacao) {
        btnConfirmacao.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            document.getElementById('btn-confirmar-modal').onclick = function() {
                window.location.href = btnConfirmacao.href;
            };
        });
    }
});