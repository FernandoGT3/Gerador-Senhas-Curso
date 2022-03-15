import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');

const quantidadeCaracteres = document.querySelector('.quant-carac');

const checkMaiusculas = document.querySelector('.chk-maiusculas');

const checkMinusculas = document.querySelector('.chk-minusculas');

const checkNumeros = document.querySelector('.chk-numeros');

const checkSimbolos = document.querySelector('.chk-simbolos');

const bntGerar = document.querySelector('.btn-gerar');

export default () => {
 bntGerar.addEventListener('click', event => {
    senhaGerada.innerHTML = gera();
 });
};

function gera() {
    const senha = geraSenha(
        quantidadeCaracteres.value, 
        checkMaiusculas.checked,
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked       
        );

    return senha || 'Nada Selecionado';
}