import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

// pegando os dados do formulário para criar o vídeo
async function criarVideo(evento) {
    evento.preventDefault(); //impede de recarregar a página quando o formulário for submetido
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
        // manda os dados recolhidos do formulário para a função de criar o video
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        // os dados enviados retornam uma promise, por isso é necessário um await, para aguardar a promise ser resolvida

        window.location.href = "../pages/envio-concluido.html";
    }catch(e){
        console.log(e) //exibindo erro lançado em conectaApi.js: 26
    }
    
}

formulario.addEventListener("submit", evento => criarVideo(evento));
// aguarda o envio do formulário, quando envia executa a função criarVideo()