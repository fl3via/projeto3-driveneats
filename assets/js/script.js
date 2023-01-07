function getPrato(prato) {
    const selecionado = document.querySelector("#prato .green-border")
    if(selecionado !== null){
        selecionado.classList.remove("green-border")
    }
    prato.classList.add("green-border")
    onButton()
}


function getBebida(bebida) {
    const selecionado = document.querySelector("#bebida .green-border")
    if(selecionado !== null){
        selecionado.classList.remove("green-border")
    }
    bebida.classList.add("green-border")
    onButton()
}


function getSobremesa(sobremesa) {
    const selecionado =  document.querySelector("#sobremesa .green-border")
    if(selecionado !== null){
        selecionado.classList.remove("green-border")
    }
    sobremesa.classList.add("green-border")
    onButton()
}


function onButton(){
    let quantidade = document.getElementsByClassName("green-border").length
    if(quantidade === 3){
        document.querySelector("button").classList.add("botao-enviar")
        document.querySelector("button p").classList.add("fechar-pedido")
        document.querySelector("button p").innerHTML = "Fechar pedido"
        document.querySelector("button").removeAttribute("disabled")
    }
}