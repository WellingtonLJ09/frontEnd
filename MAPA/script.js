var homem;
var mulher;
var crianca;

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    homem=parseFloat(document.getElementById('homens').value);
    mulher=parseFloat(document.getElementById('mulheres').value);
    crianca=parseFloat(document.getElementById('criancas').value);
})

function carne(homem, mulher, crianca){
   return (homem * 0.5)+(mulher * 0.3)+(crianca * 0.2);
}