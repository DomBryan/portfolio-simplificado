/*
    Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html:

        Passo 1 - Pegar o botão mpostrar mais no JS para poder verificar quando o usuário clicar em cima dele.

        Passo 2 - Identificar o clique no botão.

        Passo 3 - Adicionar a classe 'ativo' nos projetos mescondidos.

    Objetivo 2 - Esconder o botão de mostrar mais:

         Passo 1 - Pegar o botão e esconder ele.

 */


const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click' , () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
