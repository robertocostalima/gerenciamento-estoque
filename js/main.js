// const CONTENT = document.getElementById('content')

document.querySelectorAll('[data-action="menu"]').forEach( (cadaBotao) => {
    cadaBotao.addEventListener('click', () => {
        /* let page = cadaBotao.getAttribute('data-content');
        content.innerHTML = window[page](); */

        content.innerHTML = window[cadaBotao.dataset.content]();
    } );
} )

function alterarConteudo(nome){
    content.innerHTML = window[nome]();
}