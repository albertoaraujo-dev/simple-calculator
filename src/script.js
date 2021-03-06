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
let valorFixoNota = 0
let imposto = 0
let inputs = document.querySelectorAll('input')

function adicionaNotaFixa() {
  valorNotaFixo.classList.add('show')
  valorNotaFixo.classList.remove('hide')
}

function removeNotaFixa() {
  valorNotaFixo.classList.add('hide')
  valorNotaFixo.classList.remove('show')
  document.querySelector('#valorFixo').value = 0
}

function calcEfetiva() {
  verificaCampoVazio()
  pegaValor()
  calcLiquidos()
  calcGasto()
  calcNota()
  calcLiquido()
  totalLucroPreju()
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
  valorFixoNota = parseInt(document.querySelector('#valorFixo').value)
  imposto = parseInt(document.querySelector('#imposto').value)
}

function verificaCampoVazio() {
  inputs.forEach((item) => {
    if (!item.value) {
      item.value = 0
    }
  })
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
  if (valorFixoNota > 0) {
    totalNota = valorFixoNota
  } else {
    totalNota = totalGasto / (1 - imposto / 100)
  }
}

function calcLiquido() {
  totalLiquido = totalNota - totalNota * (imposto / 100)
  return totalLiquido
}

function totalLucroPreju() {
  let i = totalLiquido - totalGasto
  if (i > 0) {
    resLucroPreju.classList.add('show')
    resLucroPreju.classList.remove('hide')
    lucro = totalLiquido - totalGasto
    document.getElementById('lucroPreju').innerHTML = 'Lucro: '
    document.getElementById('reslucroPreju').innerHTML = `${lucro.toFixed(
      2
    )} R$`
    document.getElementById('totalGastos').innerHTML = `${totalGasto.toFixed(
      2
    )} R$`
    document.getElementById('totalNota').innerHTML = `${totalNota.toFixed(
      2
    )} R$`
  } else if (i == 0) {
    resLucroPreju.classList.add('hide')
    resLucroPreju.classList.remove('show')
    document.getElementById('reslucroPreju').innerHTML = `${preju.toFixed(
      2
    )} R$`
    document.getElementById('totalGastos').innerHTML = `${totalGasto.toFixed(
      2
    )} R$`
    document.getElementById('totalNota').innerHTML = `${totalNota.toFixed(
      2
    )} R$`
  } else {
    resLucroPreju.classList.add('show')
    resLucroPreju.classList.remove('hide')
    preju = totalLiquido - totalGasto
    document.getElementById('lucroPreju').innerHTML = 'Preju??zo: '
    document.getElementById('reslucroPreju').innerHTML = `${preju.toFixed(
      2
    )} R$`
    document.getElementById('totalGastos').innerHTML = `${totalGasto.toFixed(
      2
    )} R$`
    document.getElementById('totalNota').innerHTML = `${totalNota.toFixed(
      2
    )} R$`
  }
}
