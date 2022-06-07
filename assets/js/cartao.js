"strict mode"
//#region Constantes (elementos: cartões).
const todosCartoes = document.querySelectorAll('.cartao');
let somatorioAlturasCartoes = 0;
const margemVerticalCartao = window.screen.width < 768 ? 32 : 64;

for (let i = 0; i < todosCartoes.length; i++) {
    somatorioAlturasCartoes += todosCartoes[i].offsetHeight + margemVerticalCartao;
}

//Em um dos casos, é dividido por 2 por caber 2 na mesma "linha".
const mediaAlturaCartoes = window.screen.width < 768 || todosCartoes.length <= 4 ? somatorioAlturasCartoes / todosCartoes.length : (somatorioAlturasCartoes / 2) / todosCartoes.length;
//#endregion

//Função dos cartões (ficar visível conforme desce a página)
export function alterarEstadoDosCartoes() {
    for (let i = 1; i < todosCartoes.length + 1; i++) {
        const lado = i % 2 === 1 ? 'esquerda' : 'direita';
        let removeClasse = '';
        let adicionaClasse = '';
        if (window.scrollY >= mediaAlturaCartoes * i - 30) {
            removeClasse = 'invisivel';
            adicionaClasse = 'visivel';
        } else {
            removeClasse = 'visivel';
            adicionaClasse = 'invisivel';
        }

        todosCartoes[i - 1].classList.remove(`cartao--${removeClasse}-${lado}`);
        todosCartoes[i - 1].classList.add(`cartao--${adicionaClasse}-${lado}`);
    }
}
