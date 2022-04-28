ShowPrompt = () =>{
    n = parseFloat(window.prompt(`Quantas maçãs deseja comprar?`, 0));
    document.getElementById("result").innerHTML =`${n} maçãs custam R$${n < 12 ? n*1.3 : n}`
}