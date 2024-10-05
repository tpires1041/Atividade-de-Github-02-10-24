let descobrirNome = function(){
    let nome = document.getElementById("nome").value;
    let saida = document.getElementById("resultado");
    let imagem1 = document.getElementById("imagem1");
    let imagem2 = document.getElementById("imagem2");

    imagem1.src = "src/img/img1.jpeg"
    imagem2.src = "src/img/img2.jpeg"
    return saida.innerHTML = nome
};