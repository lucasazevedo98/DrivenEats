let nomeDoPrato = "";
let valorDoPrato = "";

let nomeDaBebida = "";
let valorDaBebida = "";

let nomeDaSobremesa = "";
let valorDaSobremesa = "";

let somaPedido = 0;

function selecionarComida(comida) {

    let posicao = document.querySelector(".pratos .selecionado")



    if(posicao!== null) {
        posicao.classList.remove("selecionado")
    }

    comida.classList.add("selecionado")

    nomeDoPrato = document.querySelector(".pratos .selecionado h2").textContent
    valorDoPrato = document.querySelector(".pratos .selecionado p").textContent

    
    pedidoFinalizado()


}

function selecionarBebida(bebida) {

    let posicao = document.querySelector(".bebidas .selecionado")



    if(posicao!== null) {
        posicao.classList.remove("selecionado")
    }

    bebida.classList.add("selecionado")

    nomeDaBebida = document.querySelector(".bebidas .selecionado h2").textContent
    valorDaBebida = document.querySelector(".bebidas .selecionado p").textContent

    pedidoFinalizado()

}

function selecionarSobremesa(sobremesa) {

    let posicao = document.querySelector(".sobremesas .selecionado")

    if(posicao !== null) {
        posicao.classList.remove("selecionado")
    }

    sobremesa.classList.add("selecionado")

    nomeDaSobremesa = document.querySelector(".sobremesas .selecionado h2").textContent
    valorDaSobremesa = document.querySelector(".sobremesas .selecionado p").textContent

    pedidoFinalizado()
}

function pedidoFinalizado() {
    if(nomeDoPrato !== "" && nomeDaBebida !== "" && nomeDaSobremesa !== ""){
        let esconderBotao = document.querySelector(".botao")

        esconderBotao.classList.add("esconder")

        let mostrarPedido = document.querySelector(".botao-confirma")

        mostrarPedido.classList.add("mostrar")
    }
}

function soma() {
    somaPedido = Number(valorDoPrato) + Number(valorDaBebida) + Number(valorDaSobremesa)
}

function pedido() {
    
    document.querySelector(".extra").classList.add("confirmacao")
    document.querySelector(".quadro-pedido").classList.remove("esconder")

    document.querySelector(".prato-pedido").innerHTML = `${nomeDoPrato}: ${valorDoPrato}`
    document.querySelector(".bebida-pedido").innerHTML = `${nomeDaBebida}: ${valorDaBebida}`
    document.querySelector(".sobremesa-pedido").innerHTML = `${nomeDaSobremesa}: ${valorDaSobremesa}`

    soma()

    document.querySelector(".total-pedido").innerHTML = `TOTAL: ${somaPedido.toFixed(2)}`


}

function whatsapp(){
    let nome = prompt("Qual seu nome?")

    let encoded = encodeURIComponent(`Ola meu nome é ${nome} e vou querer comer 1 ${nomeDoPrato}, para bebida vou querer escolher ${nomeDaBebida} e para sobremesa vou querer ${nomeDaSobremesa}. \n \n Vou pagar: R$ ${somaPedido.toFixed(2)} `)
    window.open(`https://wa.me//5575998105746?text=${encoded}`);


}

function cancelar(){
    document.querySelector(".extra").classList.remove("confirmacao")
    document.querySelector(".quadro-pedido").classList.add("esconder")
}