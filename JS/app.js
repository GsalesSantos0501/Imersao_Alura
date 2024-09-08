function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let resultados = ""

    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <div> 
                    <img class="img-jogos" src="${dado.img}" alt="${dado.desc_img}">
                </div>
                <div> 
                    <div class="texto-container">
                        <h2>
                            <a href="https://pt.wikipedia.org/wiki/League_of_Legends" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                </div>            
            </div>
`
    }

    section.innerHTML = resultados;

}