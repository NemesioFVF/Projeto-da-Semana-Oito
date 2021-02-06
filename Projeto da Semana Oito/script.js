function livros()  {
   
    const xhr = new XMLHttpRequest();

    var busca = document.getElementById("Input").value
    var tipo = document.getElementById("selec").value
    var conteudo = document.getElementById('conteudo')

    xhr.open("GET",`https://www.googleapis.com/books/v1/volumes?q=+${tipo}:${busca}&key=AIzaSyByRTlliIKCn19yuOCQOdRZUjhz1gGYBa4`);

    xhr.onreadystatechange = function () {
        
      
        if (xhr.status = 200 && xhr.readyState == 4) {

            let JSONTXT = xhr.responseText
            let infoLivros = JSON.parse(JSONTXT)
  
            for (let i = 0; i <= infoLivros.items.length; i++) {
                conteudo.innerHTML +=
                    `
                    <div class="div0" id="${[i]}">
                        <h1>${infoLivros.items[i].volumeInfo.title ?? "Sem Informação"}</h1>                    
                        <div class="div1"> 
                        <br>
                            <img class="capaL" src="${infoLivros.items[i].volumeInfo.imageLinks.thumbnail ?? "Sem foto da Capa"}">
                                <div class="div2">
                                    <p id="subt" class="ps">Subtitulo: 
                                    ${infoLivros.items[i].volumeInfo.subtitle ?? "Sem Informação"}</p>
                                    <p class="ps">Categoria: 
                                    ${infoLivros.items[i].volumeInfo.categories ?? "Sem Informação"}</p>
                                    <p id="autor" class="ps">Autor: 
                                    ${infoLivros.items[i].volumeInfo.authors ?? "Sem Informação"}</p>
                                    <p id="date" class="ps">Data de Publicação: 
                                    ${infoLivros.items[i].volumeInfo.publishedDate ?? "Sem Informação"}</p>
                                    <p id="desc" class="ps">Descrição: 
                                    ${infoLivros.items[i].volumeInfo.description ?? "Sem Informação"}</p>
                                    <p id="desc" class="ps">Número de Páginas: 
                                    ${infoLivros.items[i].volumeInfo.pageCount ?? "Sem Informação"}</p>
                                <br><br>
                                
                                <a class="link" target="_blank" href="${infoLivros.items[i].volumeInfo.infoLink}">
                                Mais Informações
                                </a>
                                <a class="link" target="_blank" href="${infoLivros.items[i].saleInfo.buyLink}">
                                Link de Compra
                                </a>
                                <a id="apilivro" target="_blank" class="link" href="${infoLivros.items[i].selfLink}">
                                API do Livro
                                </a>
                             </div>
                        </div>
                    </div> 
                    `   
            }
        }
    }   
    
    xhr.send();
    conteudo.innerHTML = "<img src='img/livroL.gif'>"
    conteudo.innerHTML = ""
}

document.getElementById("Input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});