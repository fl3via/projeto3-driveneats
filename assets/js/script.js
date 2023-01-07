function getPrato(prato) {
    const selecionado = document.querySelector("#pratos .green-border")
    if(selecionado !== null){
        selecionado.classList.remove("green-border")
    }
    prato.classList.add("green-border")
}


function getBebida(bebida) {
    const selecionado = document.querySelector("#bebidas .green-border")
    if(selecionado !== null){
        selecionado.classList.remove("green-border")
    }
    bebida.classList.add("green-border")
}


function getSobremesa(sobremesa) {
    const selecionado =  document.querySelector("#sobremesas .green-border")
    if(selecionado !== null){
        selecionado.classList.remove("green-border")
    }
    sobremesa.classList.add("green-border")
}
