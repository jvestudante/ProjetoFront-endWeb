window.addEventListener('DOMContentLoaded', function(){
    //função declarativa
    function somar(x, y){
        alert(x+y);
    }

    somar(10,20);
    somar(30,50);

    //Arrow Function
    const exibirNumero = numero => alert(numero);

    const exibirDobroTriplo = numero => alert(`O dobro é ${numero*2} e o triplo é ${numero*3}`);

    const dobroNumero = numero => numero*2;

    

})