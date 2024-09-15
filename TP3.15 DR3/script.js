const container = document.getElementById('container');

container.addEventListener('click', event => {
    container.children[0].textContent = 'teste';
})