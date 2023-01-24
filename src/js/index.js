/*
objetivo 1- quano o usuario clicar no veja o trailer, devemos abrir a modal com o video do trailer
passo 1: dar um jeito de pegar o elemento que representa o botao.
passo 2: identificar quando o usuário clicar no botão.
passo 3: dar um jeito de pegar o elemento da modal do JS
passo 4: abrir a modal na tela

objetivo 2- quando o usuario clicar no X deve fechar o link do video
passo 1: dar um jeito de pegar o elemnto que representa o X
passo 2: da um jeito de identificar quando o usuário clicar no x
passo 3: fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.scr;

function alternarModal(){
    modal.classList.toggle("aberto")
};

botaoTrailer.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk");
});

botaoFecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src","");
});