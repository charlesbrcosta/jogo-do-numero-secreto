let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector( tag );
    campo.innerHTML = texto;
}

exibirNaTela( 'h1', 'Jogo do número secreto' );
exibirNaTela( 'p', 'Escolha um número entre 1 e 10' );

limparCampo();

function verificarChute() {
    let chute = document.querySelector( 'input' ).value;

    if ( chute == numeroSecreto ) {
        exibirNaTela( 'h1', 'Acertou!' );
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${ tentativas } ${ palavraTentativa }`
        exibirNaTela( 'p', mensagemTentativas )
    } else {
        if ( chute > numeroSecreto ) {
            exibirNaTela( 'p', 'O número secreto é menor' );
        } else {
            exibirNaTela( 'p', 'O número secreto é maior' )
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 1 + 1);
}

function limparCampo() {
    chute = document.querySelector( 'input' );
    chute.value = '';
}
