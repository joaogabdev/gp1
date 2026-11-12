alert("teste")



function camposvazios() {
    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;
    var categoria = document.getElementById("categoria").value;
    var arquivo = document.getElementById("arquivo").value;

    

    if (titulo == "" || descricao == "" || categoria == "" || arquivo == "") {
        alert("Preencha todos os campos!");
    }

    return titulo != "" && descricao != "" && categoria != "" && arquivo != "";
}