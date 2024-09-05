const caixinhas = document.querySelectorAll('.caixinha');
let manterArquivo;
caixinhas.forEach(element => element.addEventListener('dragstart', event => manterArquivo = event.target));

const containers = document.querySelectorAll('.container');
containers.forEach(element => element.addEventListener('dragover', event => event.preventDefault()));
containers.forEach(element => element.addEventListener('drop', event => {
    event.preventDefault();
    if(event.target.className == 'container') {
        event.target.appendChild(manterArquivo);
    }
}));