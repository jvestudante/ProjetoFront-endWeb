window.addEventListener('DOMContentLoaded', function() {
    //Exercicio 01

    sumAges = vet => {
        sum = 0
        for(i=0 ;i<vet.length; i++){
            sum = sum + vet[i];
        }
        return sum;
    }
    vetAges = [10,21,31,40];
    document.write(`<p>Soma das Idades = ${sumAges(vetAges)}</p>`);

    //Exercicio 02 letra A



    mediaAges = vet => {
        interacao = 0
        sum = 0
        for(i=0 ;i<vet.length; i++){
            sum = sum + vet[i];
            interacao++;
        }
        return sum/interacao;
    }
    vetAges = [10,21,31,40];
    document.write(`<p>LETRA A)  Média das Idades = ${mediaAges(vetAges)}</p>`);

    //Exercico 02 letra B



    maiorAges = vet => {
        maior = 0
        for(i=0 ;i<vet.length; i++){
            if (vet[i] > maior)
                maior = vet[i]
        }
        return maior;
    }
    vetAges = [10,21,31,40];
    document.write(`<p>LETRA B)  A Maior da Idade = ${maiorAges(vetAges)}</p>`);

    //Exercicio 02 letra C



    imparAge = vet => {
        vetImpar = [];
        for(i=0 ;i<vet.length; i++){
            if (vet[i]%2 != 0)
                vetImpar.push(vet[i])
        }
        return vetImpar;
    }
    vetAges = [10,21,31,40];
    document.write(`<p>LETRA C)  Idades Impares = ${imparAge(vetAges)}</p>`);

    //Exercicio 02 letra D



    maiorDe18 = vet => {
        for(i=0 ;i<vet.length; i++){
            if (vet[i] < 18)
                return false;
        }
        return true;
    }
    vetAges = [10,21,31,40];
    document.write(`<p>LETRA D)  Todos são maiores de 18(idade >= 18) : ${maiorDe18(vetAges)}</p>`);

    //Exercicio 02 letra E




    let idadeLetraE = prompt("Informe uma idade para verificação de qual idade é maior: ")

    maiorQueIdadeX = (vet, x) => {
        for(i=0 ;i<vet.length; i++){
            if (vet[i] < x)
                return false;
        }
        return true;
    }
    vetAges = [10,21,31,40];
    document.write(`<p>LETRA E)  Todos são maiores (idade >= idade informada) : ${maiorQueIdadeX(vetAges, idadeLetraE)}</p>`);

    //Exerciccio 02 letra F




    let idadeLetraF = prompt("Informe uma idade para verificação e mostrar quais idades são maiores ou iguais: ")

    maiorQueOutraIdadeX = (vet, x) => {
        vetIdadesMaiores = [];
        for(i=0 ;i<vet.length; i++){
            if (vet[i] >= x)
                vetIdadesMaiores.push(vet);
        }
        return vetIdadesMaiores;
    }

    const exibirIdadesMaiores = vetor => {
        let string = '';
        for(i=0; i<vetor.length; i++){
            if (vetor[i] = vetor.length-1){
                string = string + `${vetor[i]}.`;
            }else
                string = string + `${vetor[i]}, `
        }
    }
    vetAges = [10,21,31,40];
    document.write(`<p>LETRA F)  EXIBIR Todos são maiores (idade >= idade informada) : ${exibirIdadesMaiores(maiorQueOutraIdadeX(vetAges, idadeLetraF))}</p>`);

    //Exercicio 02 letra G




    let idadeLetraG = prompt("Informe uma idade para verificação e calculo de média: ")

    mediaMaiorQueIdadeX = (vet, x) => {
        soma = 0;
        interacao = 0;
        for(i=0 ;i<vet.length; i++){
            if (vet[i] >= x)
                soma = soma + vet[i];
                interacao++;
        }
        return soma/interacao;
        
    }
    vetAges = [10,21,31,40];
    document.write(`<p>LETRA G)  Média das idades maiores que idade informada : ${mediaMaiorQueIdadeX(vetAges, idadeLetraG)}</p>`);
})