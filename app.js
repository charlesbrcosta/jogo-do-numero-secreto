
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;
let chute;

// Função para exibir um elemento na tela inicial.
function exibirNaTela(tag, texto) {
    let campo = document.querySelector( tag );
    campo.innerHTML = texto;
}

// Função para exibir a mensagem inicial do jogo.
function exibirMensagemInicial() {
    exibirNaTela( 'h1', 'Jogo do número secreto' );
    exibirNaTela( 'p', 'Escolha um número entre 1 e 10' );
}

// Exibe mensagem inicial ao carregar a página.
exibirMensagemInicial();
limparCampo();

// Função para verificar o chute do jogador.
function verificarChute() {
    chute = document.querySelector( 'input' ).value;

    // Verifica o chute igual ao número secreto.
    if ( chute == numeroSecreto ) {
        exibirNaTela( 'h1', 'Acertou!' );
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${ tentativas } ${ palavraTentativa }`
        exibirNaTela( 'p', mensagemTentativas );
        document.getElementById( 'reiniciar' ).removeAttribute( 'disabled' );
    } else {
        // Informa se o número secreto é maior ou menor.
        if ( chute > numeroSecreto ) {
            exibirNaTela( 'p', 'O número secreto é menor' );
        } else {
            exibirNaTela( 'p', 'O número secreto é maior' )
        }
        tentativas ++;
        limparCampo();
    }
}

// Função para gerar número aleatório entre 1 e 10.
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10 + 1);
}

// Limpa campo de entrada.
function limparCampo() {
    chute = document.querySelector( 'input' );
    chute.value = '';
}

// Reinicia o jogo.
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

