let listaDeNumerosSorteados = [];
let numeroLimite = 10;
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
    exibirNaTela( 'p', `Escolha um número entre 1 e ${ numeroLimite }` );
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

// Função para gerar um número aleatório único dentro de um intervalo.
function gerarNumeroAleatorio() {
    // Gera um número aleatório entre 1 e limiteMaximo, incluindo ambos.
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // Verifica se a quantidade de elementos na lista atingiu o limite desejado
    if( quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    // Verifica se o número gerado já foi escolhido anteriormente.
    if( listaDeNumerosSorteados.includes( numeroEscolhido )) {
        return gerarNumeroAleatorio();
    } else {
        // Se o número é único, adiciona à lista de números sorteados e retorna o número.
        listaDeNumerosSorteados.push( numeroEscolhido );
        console.log( listaDeNumerosSorteados );
        return numeroEscolhido;
    }
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

