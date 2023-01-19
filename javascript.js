const data = new Date ()

const dia = String(data.getDate() - 15).padStart(2,'0')

const mes = String (data.getMonth() +1 ).padStart(2,'0') // jan = 0,3 -> 03

const ano = data.getFullYear() // 2021

const dataAtual = (`${dia}/${mes}/${ano}`)


function preenchendoCampoData(dataAtual) {
    var preenchendoData = document.querySelector(dataAtual).value;

}

console.log(preenchendoData)