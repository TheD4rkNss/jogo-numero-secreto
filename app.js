let listaNumero = [];
let maximo = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag,texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
    }

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    let palavraTentativas = tentativas === 1 ? 'tentativa' : 'tentativas';
    let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}!`;
    if (chute === numeroSecreto) {
        exibirTexto('p',mensagemTentativas);
        exibirTexto('h1','Parabéns!');
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        exibirTexto('h1','Tente Novamente!');
        if (chute > numeroSecreto) {
            exibirTexto('p','O número secreto é menor.');
        } else {
            exibirTexto('p','O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}
function numeroAleatorio () {
    let numeroEscolhido = Math.floor(Math.random() * maximo) + 1
    let tamanhoLista = listaNumero.length;
    if (tamanhoLista === maximo) {
        listaNumero = []
    }
    if (listaNumero.includes(numeroEscolhido)) {
        return numeroAleatorio()
    } else {
        listaNumero.push(numeroEscolhido)
        console.log(listaNumero)
        return numeroEscolhido
    }

}


function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limparCampo();
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function textoInicial() {
exibirTexto('h1','Jogo do Número Secreto')
exibirTexto('p',`Tente adivinhar o número secreto entre 1 e ${maximo}.`)
}

textoInicial();
