async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    // fetch é um metodo assíncrono o único parâmetro obrigatório é a URL, caso não seja passado nenhum outro parâmetro o método será GET
    // a função aguarda o fetch terminar pra continuar a função
    const conexaoConvertida = await conexao.json(); // converte a conexão em formato de bytes em um objeto json
    
    return conexaoConvertida //retorna a lista de objetos
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
            // especificar qual tipo de arquivo está sendo tratado
        },
        body: JSON.stringify({
            titulo: titulo, //parâmetros da função
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
        // criando o objeto para postagem
    })
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo");
    }
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida
}

// exporta uma variável que contem um objeto com funções
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}

listaVideos();

