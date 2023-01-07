function getPrato(prato) {
    const selecionado = document.querySelector("#prato .green-border")
    if (selecionado !== null) {
        selecionado.classList.remove("green-border")
    }
    prato.classList.add("green-border")
    onButton()
}


function getBebida(bebida) {
    const selecionado = document.querySelector("#bebida .green-border")
    if (selecionado !== null) {
        selecionado.classList.remove("green-border")
    }
    bebida.classList.add("green-border")
    onButton()
}


function getSobremesa(sobremesa) {
    const selecionado = document.querySelector("#sobremesa .green-border")
    if (selecionado !== null) {
        selecionado.classList.remove("green-border")
    }
    sobremesa.classList.add("green-border")
    onButton()
}


function onButton() {
    let quantidade = document.getElementsByClassName("green-border").length
    if (quantidade === 3) {
        document.querySelector("button").classList.add("botao-enviar")
        document.querySelector("button p").classList.add("fechar-pedido")
        document.querySelector("button p").innerHTML = "Fechar pedido"
        document.querySelector("button").removeAttribute("disabled")
    }
}

function enviarPedido() {
        const prato = document.querySelector("#prato .green-border h4").innerHTML;
        const bebida = document.querySelector("#bebida .green-border h4").innerHTML;
        const sobremesa = document.querySelector("#sobremesa .green-border h4").innerHTML;
      
        const precoPrato = document.querySelector("#prato .green-border .preco").innerHTML;
        const precoBebida = document.querySelector("#bebida .green-border .preco").innerHTML;
        const precoSobremesa = document.querySelector("#sobremesa .green-border .preco" ).innerHTML;
      
        const precoPratoNumber = valores(precoPrato);
        const precoBebidaNumber = valores(precoBebida);
        const precoSobremesaNumber = valores(precoSobremesa);
        const precoTotal = precoPratoNumber + precoBebidaNumber + precoSobremesaNumber;
      
        const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \nTotal: R$ ${precoTotal.toFixed(2)}`
      
        const whatsapp = "https://wa.me/5524981593428?text=" + encodeURI(mensagem);
        window.open(whatsapp);
      }
      
      function valores(string) {
        let numero = string.replace(/[^0-9]/g, "");
        return parseInt(numero) / 100;
      }
    