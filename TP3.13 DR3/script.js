let contador = 0;
const classesCaixinha = ['corVerde', 'corRoxa', 'corLaranja', 'corVermelha'];
const containerCaixinhas = document.getElementById('novo');
const button = document.getElementById('createButton');
let manterArquivo;

button.addEventListener('click', () => {
    const novaDiv = document.createElement('div');
    novaDiv.setAttribute('class', 'caixinha');
    novaDiv.setAttribute('draggable', 'true');

    if(contador > 3) {
        contador = 0;
        novaDiv.classList.add(classesCaixinha[contador]);
        contador++;
    } else {
        novaDiv.classList.add(classesCaixinha[contador]);
        contador++;
    }

    novaDiv.addEventListener('dragstart', event => manterArquivo = event.target);

    containerCaixinhas.appendChild(novaDiv);
})

const containers = document.querySelectorAll('.container');
containers.forEach(element => element.addEventListener('dragover', event => event.preventDefault()));
containers.forEach(element => element.addEventListener('drop', event => {
    event.preventDefault();
    if(event.target.className == 'container') {
        event.target.appendChild(manterArquivo);
    }
}));