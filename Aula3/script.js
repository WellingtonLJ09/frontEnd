const div1 = document.getElementById('div1');
const div4 = document.querySelector('#div4')

div1.classList.add('vermelho');
div1.nextElementSibling.classList.add('amarelo');
div4.parentElement.classList.add('verde');

const element = document.createElement('div');
element.className = 'verde quadrado';
div1.appendChild(element);
Element.innerHTML = 'Olá, mundo!';

for(let index =0; index < 5; index++){
    const element2 = document.createElement('div');
    element2.className = 'quadrado amarelo';
    div1.appendChild(element2);
}

element.style.backgroundImage = 'url(https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg)'
element.style.backgroundSize = 'cover';