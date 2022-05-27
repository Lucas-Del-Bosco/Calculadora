const resultado = document.querySelector('.result')
const confirmar = document.querySelector('.igual')

function inserir(valor) {
    resultado.innerHTML += valor;
}

function limpar() {
    resultado.innerHTML = ' ';
}

function igual() {
    if(resultado.textContent != 'Erro') {
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}