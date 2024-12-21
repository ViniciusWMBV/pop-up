// Seleciona os elementos
const abrirPopup = document.getElementById('abrirPopup');
const fecharPopup = document.getElementById('fecharPopup');
const popup = document.getElementById('popup');

// Abre o pop-up
abrirPopup.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Fecha o pop-up
fecharPopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fecha o pop-up clicando fora dele
window.addEventListener('click', (evento) => {
    if (evento.target === popup) {
        popup.style.display = 'none';
    }
});
