const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';
function filmesEmAlta () {

    $.ajax({
      
        url: TMDB_ENDPOINT_BASE + '/movie/popular',
        data: {
            api_key: '1ecf282b623bd6d110a137858413336c',
            
        }
    })
    .done(function (data) {
 
        let codigo_html = '';
        
         
         for (i=0; i< data.results.length; i++) {

            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            id = data.results[i].id;

            codigo_html += ` <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <a href="https://www.themoviedb.org/movie/${id}"> <img src="${imagem}" class="card-img-top" alt="${titulo}"></a>
           </div>`;
         }

         $('#lista_filmes').html(codigo_html)

    });

}


function PesquisaFilmes () {
    let pesquisa = document.querySelector('#procurar').value;
        $.ajax({
        url: TMDB_ENDPOINT_BASE + '/search/movie',
        data: {
            api_key: '1ecf282b623bd6d110a137858413336c',
            query: pesquisa,
           
        }
    })
    .done(function (data) {
 
        let codigo_html = '';
        

         for (i=0; i< data.results.length; i++) {

         
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            id = data.results[i].id;

            codigo_html +=  `<div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="card">
            <a href="https://www.themoviedb.org/movie/${id}"> <img src="${imagem}" class="card-img-top" alt="${titulo}"></a>
            </div>
        </div>`;
         }


        
         $('#lista_filmes').html(codigo_html)
         $('#titulo').html(`Pesquisa para: ${pesquisa}`)


    });
}

$( document ).ready(function () {

    filmesEmAlta ();

    $('#btn_Pesquisar').click (PesquisaFilmes);
});