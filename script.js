let descobrirNome = function(){
    let nome = document.getElementById("nome").value;
    let saida = document.getElementById("resultado");
    let imagem1 = document.getElementById("imagem");

    imagem1.src = "\src\img\img1.jpeg"
    return saida.innerHTML = nome
};