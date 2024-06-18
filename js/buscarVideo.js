import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)
    const lista = document.querySelector("[data-lista]")
    
    while(lista.firstChild){
        lista.removeChild(lista.firstChild); //limpa a lista antes de procurar a busca
    }//procura o primeiro da lista, remove o primeiro, procura o primeiro, remove o primeiro...

    busca.forEach(elemento => 
        lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
    );

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="message__titulo">Nenhum resultado encontrado</h2>`
    }

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", buscarVideo);
//seleciona o botão e aguarda o click, quando o click é dado, manda pra o evento pra função buscarVideo();