const perguntas = [

{
pergunta:
"Você recebeu um link dizendo que seu banco bloqueou sua conta. O que fazer?",

opcoes:[
"Clicar imediatamente",
"Ignorar e ligar para o banco",
"Enviar seus dados"
],

correta:1
},

{
pergunta:
"Você deve compartilhar sua senha?",

opcoes:[
"Sim",
"Não",
"Somente com amigos"
],

correta:1
},

{
pergunta:
"Recebeu um PIX de desconhecido. O que fazer?",

opcoes:[
"Devolver sem verificar",
"Verificar origem antes",
"Ignorar totalmente"
],

correta:1
},

{
pergunta:
"Recebeu código do WhatsApp por SMS. O que fazer?",

opcoes:[
"Enviar para qualquer pessoa",
"Compartilhar com amigos",
"Não compartilhar"
],

correta:2
},

{
pergunta:
"Qual senha é mais segura?",

opcoes:[
"123456",
"Maria123",
"Maria#1980!"
],

correta:2
}

];

let atual = 0;
let pontos = 0;

mostrarPergunta();

function mostrarPergunta(){

if(atual >= perguntas.length){

mostrarResultado();
return;

}

document.getElementById(
"pergunta"
).innerHTML =
perguntas[atual].pergunta;

let opcoesHTML = "";

perguntas[atual].opcoes.forEach(
(opcao,index)=>{

opcoesHTML += `
<button
class="opcao"
onclick="responder(${index})">
${opcao}
</button>
`;

});

document.getElementById(
"opcoes"
).innerHTML =
opcoesHTML;

}

function responder(indice){

if(
indice ===
perguntas[atual].correta
){

pontos++;

}

atual++;

mostrarPergunta();

}

function mostrarResultado(){

let mensagem = "";

if(pontos <= 2){

mensagem =
"⚠️ Você precisa aprender mais sobre segurança digital.";

}else if(pontos <= 4){

mensagem =
"👍 Bom trabalho! Continue aprendendo.";

}else{

mensagem =
"🏆 Excelente! Você domina os conceitos básicos de segurança digital.";

}

document.getElementById(
"pergunta"
).innerHTML =
"Quiz Finalizado";

document.getElementById(
"opcoes"
).innerHTML =
mensagem;

document.getElementById(
"pontuacao"
).innerHTML =
`Pontuação: ${pontos}/5`;

}