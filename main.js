//var nome= document.querySelector(".nome");                         **aqui usamos quando queremos adicionar um input no html
//var idade= document.querySelector(".idade")                        **aqui usamos quando queremos adicionar um input no html
//var linguagemDeEstudo= document.querySelector(".linguagem")        **aqui usamos quando queremos adicionar um input no html

var nome= prompt("Qual seu nome?");
var idade= prompt("Quantos anos você tem?");
var linguagemDeEstudo= prompt("Qual linguagem esta estudando atualmente?");

nome;
idade;
linguagemDeEstudo;

function MandaTexto() {
   
    document.write("Olá " + nome + ", vi que vc já tem "+ idade + "e esta atualmente estudando "+linguagemDeEstudo);

}

MandaTexto();

