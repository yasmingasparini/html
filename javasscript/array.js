const frutas = ["banana","uva","morango"]
console.log (frutas) 

function inserirFinalArray() {
    var novaFruta = prompt("digite uma fruta")
    frutas.unshift(novaFruta)
    console.log(frutas)
    alert(frutas.length)
}
function removerInicioArray() {
   frutas.shift()
   console.log(frutas)
}
function removerFinalArray() {
    var novaFruta = prompt("digite uma fruta")
    frutas.pop
    console.log(frutas)
}

const carro = ["camaro","porsche","fusion"]
 console.log (carro)

function inserirFunçaoArray() {
    var novoCarro = prompt ("digite um carro")
    carro.unshift(novoCarro)
    console.log(carro)

}

function ListarArray(){
    for(i=0; i < frutas.length;i++){
        var fruta = frutas[i]
        console.log(fruta)

    }
    alert("finalizou loop...")
}