const lis = document.querySelectorAll('li');

lis.forEach(addEventListener('click', event => {
    alert(event.target.textContent);
}))