if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "../html/signin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const primeiroNome = userLogado.nome.split(" ")[0]; // Dividir a string em um array de palavras e resgatar o primeiro elemento 
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${primeiroNome}, faça o download do nosso app!`; //texto pré-definido com o nome da pessoa logada
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../../index.html";
  }