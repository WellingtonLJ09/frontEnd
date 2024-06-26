const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const idade = document.getElementById('idade');
    const resultado = document.querySelector('#resultado');

    // resultado.innerHTML = 'Daqui a 5 anos você terá ' + (Number(idade.value) + 5) + ' anos';
    
    // if (isNaN(idade.value)) {
    //     resultado.innerHTML = "A idade tem que ser um número!";
    // } else if (idade.value >= 18 && idade.value < 80) {
    //     resultado.innerHTML = "Pode dirigir!";
    // } else {
    //     resultado.innerHTML = "Não pode dirigir!";
    // }

});


const cep = document.getElementById('cep');
cep.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '');
    if (event.target.value.length > 5) {
        event.target.value = event.target.value.slice(0,5) + '-' + event.target.value.slice(5,8);
    }
});
