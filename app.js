let listaNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', "jogo do número secreto");
    exibirTextoNaTela('p', "Escolha um numero entre 1 e 10");
}

exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value

    if (chute.length > 0){
        if (Number(chute) === numeroSecreto){
            exibirTextoNaTela('h1', "Acertou!");
            let tentativaAcerto = tentativas === 1 ? "tentativa": "tentativas";
            exibirTextoNaTela('p', `Vocẽ descobriu o número secreto com ${tentativas} ${tentativaAcerto}!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            if (Number(chute) > numeroSecreto){
                exibirTextoNaTela('p', "O número secreto é menor que o chute");
            }else {
                exibirTextoNaTela('p', "O número secreto é maior que o chute");
            }
            tentativas++;
            limparCampo();

        }
    }



}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista === numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
