"strict mode"
//#region Constantes (elementos: cabeçalho e navegação).
export const cabecalho = document.querySelector('.cabecalho');
const cabecalhoLogo = document.querySelector('.cabecalho__logo');
const coresDoCabecalho = ['cabecalho--web','cabecalho--mobile','cabecalho--desktop','cabecalho--design'];
const todosItensDaNavegacao = document.querySelectorAll('.navegacao__item')
export const secoesDeProjeto = document.querySelectorAll('.secao-projetos');
//#endregion

//#region Funções de navegação (ao clicar -> reposicionar o scroll da tela).
cabecalhoLogo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({top: 0, behavior: 'smooth'});
});

for(let i = 0; i < todosItensDaNavegacao.length; i++){
    todosItensDaNavegacao[i].children[0].addEventListener('click', (e) => e.preventDefault());
    todosItensDaNavegacao[i].onclick = () => window.scroll({top: (secoesDeProjeto[i].offsetTop - cabecalho.offsetHeight + 1), behavior: 'smooth'});
}
//#endregion

//Função do cabecalho/navegação (ficar visível e com cor referente a seção).
export function alterarEstadoDoCabecalho(){
    //Scroll muito antes das seções de projeto? Se sim -> não mostrar cabeçalho.
    if(window.scrollY < secoesDeProjeto[0].offsetTop - cabecalho.offsetHeight){
        cabecalho.classList.remove('cabecalho--visivel');
        for(let i=0; i < todosItensDaNavegacao.length; i++){
            cabecalho.classList.remove(coresDoCabecalho[i]);
            todosItensDaNavegacao[i].classList.remove('navegacao__item--ativo');
        }
        return;
    }
    
    //Está nas seções de projeto -> Ficar visível e com cores temas das seções.
    for (let i = 0; i < secoesDeProjeto.length; i++) {
        const posicaoInicialSecao = secoesDeProjeto[i].offsetTop - cabecalho.offsetHeight;
        const posicaoFinalSecao = (secoesDeProjeto[i].offsetTop + secoesDeProjeto[i].offsetHeight) - cabecalho.offsetHeight;

        if (window.scrollY >= posicaoInicialSecao && window.scrollY < posicaoFinalSecao) {
            for(let j=0; j < secoesDeProjeto.length; j++){
                cabecalho.classList.remove(coresDoCabecalho[j]);
                todosItensDaNavegacao[j].classList.remove('navegacao__item--ativo')
            }
            
            cabecalho.classList.add('cabecalho--visivel');
            cabecalho.classList.add(coresDoCabecalho[i]);
            todosItensDaNavegacao[i].classList.add('navegacao__item--ativo')
        }
    }
}
