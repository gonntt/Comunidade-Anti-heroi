function prazer() {
    var element = document.getElementById("prazer");
    element.classList.add("show-modal");
}
function prazer1(){
    var element = document.getElementById("prazer");
    element.classList.remove("show-modal");
}
function poder() {
    var element = document.getElementById("poder");
    element.classList.add("show-modal");
}
function poder1(){
    var element = document.getElementById("poder");
    element.classList.remove("show-modal");
}
function dinheiro() {
    var element = document.getElementById("dinheiro");
    element.classList.add("show-modal");
}
function dinheiro1(){
    var element = document.getElementById("dinheiro");
    element.classList.remove("show-modal");
}
function raiva() {
    var element = document.getElementById("raiva");
    element.classList.add("show-modal");
}
function raiva1(){
    var element = document.getElementById("raiva");
    element.classList.remove("show-modal");
}
function tristeza() {
    var element = document.getElementById("tristeza");
    element.classList.add("show-modal");
}
function tristeza1(){
    var element = document.getElementById("tristeza");
    element.classList.remove("show-modal");
}
function amor() {
    var element = document.getElementById("amor");
    element.classList.add("show-modal");
}
function amor1(){
    var element = document.getElementById("amor");
    element.classList.remove("show-modal");
}
function capturar() {
    var element = document.getElementById("comentario");
    element.classList.add("show-modal");
}
function capturar1(){
    var element = document.getElementById("comentario");
    element.classList.remove("show-modal");
}
function suporte(){
    var suporte = document.getElementById("suporte");

    var dados = JSON.parse(localStorage.getItem("dadosProduto"));
    if(dados == null){
        localStorage.setItem("dadosProduto","[]");
        dados = [];
    }
    var auxRegistro = {
        Comentario: suporte.value
    }
    dados.push(auxRegistro);
    localStorage.setItem("dadosProduto", JSON.stringify(dados));
}
const LocalStoragecomentarios = JSON.parse(localStorage
    .getItem('comentario'))
let transactions = localStorage
.getItem('comentario') !== null ? LocalStoragecomentarios : []