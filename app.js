
function exibirNaTela(tag, texto) {
    let campo = document.querySelector( tag );
    campo.innerHTML = texto;
}

exibirNaTela( 'h1', 'Jogo do número secreto' );
exibirNaTela( 'p', 'Escolha um número entre 1 e 10' );