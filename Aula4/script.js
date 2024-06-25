const form = document.querySelector('form');

form.addEventListener('submit', (event)  =>{
    event.preventDefault();
    const idade = document.getElementById('idade');
    const resultado = document.querySelector('#resultado');

    if (idade.value >= 18){
        resultado.innerHTML = `Pode dirigir!`;
    }else{
        resultado.innerHTML = `Não pode dirigir!`;
    }

})