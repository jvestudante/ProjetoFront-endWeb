window.addEventListener("DOMContentLoaded", function() {

    let btn = document.getElementById("btnClicar1");
    let btn2 = document.getElementById("btnClicar2");
    let btn3 = document.getElementById("btnClicar3");

    btn.addEventListener('click', function() {
        exibirMsg("Olá Botão 01")
    })

    btn2.addEventListener('click', function() {
        exibirMsg("Olá Botão 02, tudo joia ????")
    })

    btn3.addEventListener('click', function () {
        var a = prompt("Digite um número: ")
        var b = prompt("Digite outro número: ")
        soma(a,b);
    })


    function exibirMsg(texto){
        alert(texto)
    }
    function soma(x,y){
        alert(x+y);
    }
})