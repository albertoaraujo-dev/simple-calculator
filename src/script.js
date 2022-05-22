let totalLiquido = 0
let totalGasto = 0
let lucro = 0
let preju = 0
let totalNota = 0
let sorayaTotalLiquido = 0
let josiTotalLiquido = 0
let tatiTotalLiquido = 0
let atLiquido = 0
let escola = 0
let toLiquido = 0
let sorayaLiquido = 0
let sorayaHoras = 0
let josiLiquido = 0
let josiHoras = 0
let tatiLiquido = 0
let tatiHoras = 0

// document.querySelector('#botao').addEventListener('click', () => {
//   getData()
// })

function calcEfetiva() {
  pegaValor()
  calcLiquidos()
  calcGasto()
  calcNota()
  calcLiquido()
  totalLucroPreju()
  mostraResultados()
}

function pegaValor() {
  atLiquido = parseInt(document.querySelector('#gasto1').value)
  escola = parseInt(document.querySelector('#gasto2').value)
  toLiquido = parseInt(document.querySelector('#gasto3').value)
  sorayaLiquido = parseInt(document.querySelector('#soLiq').value)
  sorayaHoras = parseInt(document.querySelector('#soHoras').value)
  josiLiquido = parseInt(document.querySelector('#josiLiq').value)
  josiHoras = parseInt(document.querySelector('#josiHoras').value)
  tatiLiquido = parseInt(document.querySelector('#tatiLiq').value)
  tatiHoras = parseInt(document.querySelector('#tatiHoras').value)
}

function calcLiquidos() {
  sorayaTotalLiquido = sorayaLiquido * sorayaHoras
  josiTotalLiquido = josiLiquido * josiHoras
  tatiTotalLiquido = tatiLiquido * tatiHoras
}

function calcGasto() {
  totalGasto =
    tatiTotalLiquido +
    josiTotalLiquido +
    sorayaTotalLiquido +
    atLiquido +
    escola +
    toLiquido
}

function calcNota() {
  totalNota = totalGasto / (1 - 0.205)
}

function calcLiquido() {
  totalLiquido = totalNota - totalNota * (20.5 / 100)
  return totalLiquido
}

function totalLucroPreju() {
  let i = totalLiquido - totalGasto
  if (i >= 0) {
    lucro = totalLiquido - totalGasto
    console.log(totalNota, totalLiquido, lucro)
    document.getElementById('reslucroPreju').innerHTML = lucro.toFixed(2)
    document.getElementById('totalGastos').innerHTML = totalGasto.toFixed(2)
    document.getElementById('totalNota').innerHTML = totalNota.toFixed(2)
  } else {
    preju = totalLiquido - totalGasto
    console.log(totalLiquido, totalGasto, lucro)
    document.getElementById('reslucroPreju').innerHTML = preju.toFixed(2)
    document.getElementById('totalGastos').innerHTML = totalGasto.toFixed(2)
    document.getElementById('totalNota').innerHTML = totalNota.toFixed(2)
  }
}

function mostraResultados() {
  totalGasto
  preju
  lucro
  totalNota
}
