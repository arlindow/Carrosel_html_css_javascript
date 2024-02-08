// Seleciona o elemento do carrossel
const slider = document.querySelector('.container');

// Variáveis para controle do mouse
let isDown = false; // Indica se o botão do mouse está pressionado
let startX; // Posição inicial do mouse no eixo X
let scrollLeft; // Posição inicial de rolagem do carrossel

// Adiciona evento de clique no botão do mouse
slider.addEventListener('mousedown', (e) => {
    isDown = true; // O botão do mouse está pressionado
    slider.classList.add('active'); // Adiciona a classe 'active' ao carrossel
    startX = e.pageX - slider.offsetLeft; // Obtém a posição inicial do mouse no eixo X
    scrollLeft = slider.scrollLeft; // Obtém a posição inicial de rolagem do carrossel
});

// Adiciona evento quando o mouse sai do carrossel
slider.addEventListener('mouseleave', () => {
    isDown = false; // O botão do mouse não está mais pressionado
    slider.classList.remove('active'); // Remove a classe 'active' do carrossel
});

// Adiciona evento quando o botão do mouse é solto
slider.addEventListener('mouseup', () => {
    isDown = false; // O botão do mouse não está mais pressionado
    slider.classList.remove('active'); // Remove a classe 'active' do carrossel
});

// Adiciona evento quando o mouse é movido sobre o carrossel
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Se o botão do mouse não está pressionado, não faz nada
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft; // Obtém a posição atual do mouse no eixo X
    const walk = (x - startX) * 3; // Calcula a quantidade de movimento
    slider.scrollLeft = scrollLeft - walk; // Atualiza a posição de rolagem do carrossel
});