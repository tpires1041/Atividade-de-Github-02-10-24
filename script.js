let descobrirNome = function(){
    let nome = document.getElementById("nome").value;
    let saida = document.getElementById("resultado");
    let imagem1 = document.getElementById("imagem1");
    let imagem2 = document.getElementById("imagem2");
    let imagem3 = document.getElementById("imagem3");

    imagem1.src = "src/img/img1.jpeg"
    imagem2.src = "src/img/img2.jpeg"
    imagem3.src = "src/img/img3.jpg"
    return saida.innerHTML = "Seu nome é "+ nome
};