const nome= prompt("Qual seu nome?");
const idade = prompt("Qual sua idade?");
const LinguagemEmEstudo = prompt("Qual linguagem esta estudando atualmente?")
const msg1 = `Fala ${nome}! fico feliz que aos seus ${idade} anos, você esteja estudando ${LinguagemEmEstudo}`;
alert(msg1);
const gostaDeEstudar =prompt(`Você gosta de estudar ${LinguagemEmEstudo}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if(gostaDeEstudar==1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso")

} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}


