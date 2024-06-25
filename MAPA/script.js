function carne(homem, mulher, crianca){
    return ((homem * 0.5)+(mulher * 0.3)+(crianca * 0.2)).toFixed(1);
 }

function frango(homem, mulher, crianca){
    return ((homem * 0.2)+(mulher * 0.2)+(crianca * 0.1)).toFixed(1);
 }

function linguica(homem, mulher, crianca){
    return ((homem * 0.2)+(mulher * 0.2)+(crianca * 0.2)).toFixed(1);
 }

function refrigerante(homem, mulher, crianca){
    return ((homem * 0.3)+(mulher * 0.4)+(crianca * 0.2)).toFixed(1);
 }

function cerveja(homem, mulher){
    return ((homem * 0.8)+(mulher * 0.5)).toFixed(1);
 }
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const homem=parseFloat(document.getElementById('homens').value);
    const mulher=parseFloat(document.getElementById('mulheres').value);
    const crianca=parseFloat(document.getElementById('criancas').value);

    const totalCarne = carne(homem, mulher, crianca);
    const totalFrango = frango(homem, mulher, crianca);
    const totalLinguica = linguica(homem, mulher, crianca);
    const totalRefri = refrigerante(homem, mulher, crianca);
    const totalCerveja = cerveja(homem, mulher, crianca);

    document.getElementById('resultado').innerText = `${totalCarne}kg de carne bovina
    ${totalFrango}kg de Frango
    ${totalLinguica}kg de Linguiça
    ${totalRefri}L de Refrigerante
    ${totalCerveja}L de Cerveja`;
});