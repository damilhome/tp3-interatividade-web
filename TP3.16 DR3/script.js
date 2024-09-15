const lista = document.getElementById('lista');

lista.addEventListener('click', () => {
    lista.children[0].innerText = 'Amapá';
    lista.children[0].style.backgroundColor = 'blue';

})