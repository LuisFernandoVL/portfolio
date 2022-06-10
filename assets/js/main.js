"strict mode"
import { alterarEstadoDoCabecalho, cabecalho, secoesDeProjeto } from "./cabecalho.js";
import { alterarEstadoDosCartoes } from "./cartao.js";

//Função que estipula quantas vezes outra função é chamada.
const debounce = function (func, wait, imediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!imediate) func.apply(context, args);
        };
        const callNow = imediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const botoes = document.querySelector('.botao');
botoes.addEventListener('click', (e) =>{
    e.preventDefault();
});

//Ao clicar no "botão" projetos -> encaminhar para seção projetos.
const linkAncoraProjetos = document.querySelector('.secao-apresentacao__ancora-projetos');

linkAncoraProjetos.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: secoesDeProjeto[0].offsetTop - cabecalho.offsetHeight + 1, behavior: 'smooth' });
});

//Quando o scroll é ativo -> mostra (ou não) o cabeçalho e os cartões.
window.addEventListener('scroll', debounce(function () {
    alterarEstadoDoCabecalho();
    alterarEstadoDosCartoes();
}, 15));
