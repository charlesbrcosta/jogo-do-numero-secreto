let numeroSecreto = gerarNumeroAleatorio();

function exibirNaTela(tag, texto) {
    let campo = document.querySelector( tag );
    campo.innerHTML = texto;
}

exibirNaTela( 'h1', 'Jogo do número secreto' );
exibirNaTela( 'p', 'Escolha um número entre 1 e 10' );

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10 + 1);
}
