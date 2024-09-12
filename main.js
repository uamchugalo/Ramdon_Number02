varH1 = document.querySelector('h1');
varH1.innerText = 'Secret Number';

varP = document.querySelector('p');
varP.innerHTML = 'type a number between 1 and 10';

let secret_number = Math.floor((Math.random() * 10));

function verificarChute() {
    let guess = document.querySelector('input').value;
    if (guess == secret_number) {
        alert('parabens, você acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (guess < secret_number) {
            varP.innerHTML = 'tente novamente, o número é maior';
        } else {
            varP.innerHTML = 'tente novamente, o número é menor';
        }
    }
}
