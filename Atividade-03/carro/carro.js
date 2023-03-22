let carro = {};

function criarCarro() {
  let marca = document.getElementById("marca").value;
  let modelo = document.getElementById("modelo").value;
  let ano = document.getElementById("ano").value;
  let cor = document.getElementById("cor").value;
  let km = document.getElementById("km").value;
  let valor = document.getElementById("valor").value;

  carro = {
    marca: marca,
    modelo: modelo,
    ano: ano,
    cor: cor,
    km: km,
    valor: valor,
    anosUtilizacao: function() {
      let date = new Date();
      let anoAtual = date.getFullYear();
      let anos = anoAtual - this.ano;
      return anos;
    },
    valorMercado: function() {
      if (this.km <= 30000) {
        return this.valor * 1.1;
      } else if (this.km > 30000 && this.km <= 50000) {
        return this.valor;
      } else {
        return this.valor * 0.9;
      }
    }
  };

  document.getElementById("dados-carro").innerHTML = "Marca: " + carro.marca + "<br>" +
    "Modelo: " + carro.modelo + "<br>" +
    "Ano: " + carro.ano + "<br>" +
    "Cor: " + carro.cor + "<br>" +
    "Kilometragem: " + carro.km + "<br>" +
    "Valor Fipe: " + carro.valor + "<br>" +
    "Anos de Utilização: " + carro.anosUtilizacao() + "<br>" +
    "Valor de Mercado: " + carro.valorMercado();
}