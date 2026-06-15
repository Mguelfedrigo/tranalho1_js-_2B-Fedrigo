function verificar() {

    let idade =
    Number(document.getElementById("idade").value);

    let genero =
    document.getElementById("genero").value;

    if (idade >= 18) {
        alert("Você é maior de idade");
    }
    else {
        alert("Você é menor de idade");
    }

    if (genero == "Masculino") {
        alert("Você é do gênero Masculino");
    }

    if (idade >= 18 && genero == "Masculino") {
        alert("Você é maior de idade E é do gênero Masculino");
    }

}