const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let nomeJogador = '';

const containerTexto = document.querySelector('.container__texto');

function solicitarNome() {
    nomeJogador = prompt("Qual é o seu nome?");
    if (!nomeJogador) {
        alert("Por favor, insira um nome válido.");
        solicitarNome();
    } else {
        containerTexto.innerHTML = `<h1>${nomeJogador}, adivinhe o número de 1 a 100!</h1>`;
        verificarPalpite();
    }
}

function verificarPalpite() {
    const palpite = parseInt(prompt("Adivinhe o número secreto entre 1 e 100:"));
    
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Insira um número válido entre 1 e 100.");
        verificarPalpite(); 
        return;
    }
    
    tentativas++; 

    if (palpite === numeroSecreto) {
        containerTexto.innerHTML = `
            <h1>Parabéns, ${nomeJogador}!!! Você <span class="container__texto-azul">acertou!</span></h1>
            <h2>Você descobriu o número secreto em ${tentativas} tentativas!</h2>
        `;
    } else {
        let dica = palpite < numeroSecreto ? "maior" : "menor";
        let proximidade = Math.abs(numeroSecreto - palpite) <= 10 ? "Você está perto!" : "Você está longe!";
        
        alert(`Errou! O número secreto é ${dica} que ${palpite}. ${proximidade}`);
        verificarPalpite(); 
    }
}

solicitarNome();
