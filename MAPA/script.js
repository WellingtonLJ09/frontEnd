function carne(homem, mulher, crianca){
    return (homem * 0.5)+(mulher * 0.3)+(crianca * 0.2);
 }

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const homem=parseFloat(document.getElementById('homens').value);
    const mulher=parseFloat(document.getElementById('mulheres').value);
    const crianca=parseFloat(document.getElementById('criancas').value);

    const totalCarne = carne(homem, mulher, crianca);

    document.getElementById('resultado').innerText = `${totalCarne}kg de carne bovina`;
});