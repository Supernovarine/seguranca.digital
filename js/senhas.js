function gerarSenha(){

let nome =
document.getElementById("nome").value;

let cor =
document.getElementById("cor").value;

let ano =
document.getElementById("ano").value;

let senha =
nome + "#" + ano + cor + "!";

document.getElementById(
"senhaGerada"
).innerHTML = senha;

}

function avaliarSenha(){

let senha =
document.getElementById(
"senhaUsuario"
).value;

let resultado =
document.getElementById(
"forcaSenha"
);

if(senha.length < 6){

resultado.innerHTML =
"🔴 Senha Fraca";

}else if(senha.length < 10){

resultado.innerHTML =
"🟡 Senha Média";

}else{

resultado.innerHTML =
"🟢 Senha Forte";

}

}