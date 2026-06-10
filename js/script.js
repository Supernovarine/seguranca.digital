function verificarResposta(correta){

    const resultado =
        document.getElementById("resultado");

    if(correta){

        resultado.innerHTML =
        "✅ Correto! Nunca compartilhe suas senhas.";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML =
        "❌ Incorreto! Suas senhas são pessoais.";

        resultado.style.color = "red";
    }
}