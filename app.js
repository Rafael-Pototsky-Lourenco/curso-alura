function pesquisar() {
     // Exibe um console.log para fins de depuração.
     console.log("Clicado :O");

     // Obtém a seção onde os resultados serão exibidos.
     let section = document.getElementById("resultados-pesquisa");

     let campoPesquisa = document.getElementById("campo-pesquisa").value;

     if (campoPesquisa == "")
     {
          section.innerHTML = "<p>Nada foi Encontrado. Você precisa digitar o nome de um Atleta ou Esporte</p>"
          return;
     }

     campoPesquisa = campoPesquisa.toLowerCase(); 

     // Inicializa uma string vazia para armazenar os resultados.
     let resultados = "";
     let titulo = "";
     let descricao = "";
     let tags = "";

     // Itera sobre cada dado e constrói o HTML do resultado.
     for (let dado of dados)
     {
          titulo = dado.titulo.toLowerCase();
          descricao = dado.descricao.toLowerCase();
          tags = dado.tags.toLowerCase();
          if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
          {
               resultados += `
               <div class="item-resultado">
                    <h2>
                         <a href="" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais Informações</a>
               </div>
          `;
          }
     }

     if (!resultados)
     {
          resultados = "<p>Nada foi encontrado!</p>"
     }

     // Atualiza o conteúdo HTML da seção com os resultados.
     section.innerHTML = resultados;
}