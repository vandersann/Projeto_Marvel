/*
 OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:
  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
 - retirar a classe selecionado do personagem que está selecionado
 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande
    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/


const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const idSelecionado = personagem.attributes.id.value;

    if (idSelecionado === 'dermogogon') return;

    /*
            OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:
            - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
            - retirar a classe selecionado do personagem que está selecionado
        */

    alterarImagemPersonagemGrande(idSelecionado);

    alterarNomePErsonagemGrande(personagem);

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    /*
        OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
            - alterar a imagem do jogador 1
            - alterar o nome do jogador 1
    */
  });
});

function alterarNomePErsonagemGrande(personagem) {
  const nomeSelecionado = personagem.getAttribute("data-name");
  const personagemJogador1 = document.querySelector(".personagem-grande.personagem-jogador-1");

  personagemJogador1.getElementsByTagName("h2")[0].innerHTML = nomeSelecionado;
}

function alterarImagemPersonagemGrande(idSelecionado) {
  const imagemJogador1 = document.getElementById("personagem-jogador-1");
  imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
}