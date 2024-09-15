const texto = document.getElementById('texto');
const spanNome = document.getElementById('nome');

texto.addEventListener('keydown', event => {
    if(event.key === 'Enter') {
        spanNome.textContent = texto.value;
        texto.value = '';
    }
})