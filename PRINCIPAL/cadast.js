var buttonEntrar = document.querySelector("#entrar");
var buttonCadastrar = document.querySelector("#cadastrar");

var body = document.querySelector("body");

buttonEntrar.addEventListener("click", function (){
    body.className = "entrar-js";
    
});

buttonCadastrar.addEventListener("click", function (){
    body.className = "cadastrar-js";
    
});

