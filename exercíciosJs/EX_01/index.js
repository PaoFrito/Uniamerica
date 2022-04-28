ShowPrompt = () =>{
    let salario = parseFloat(window.prompt("Qual o seu salário mensal?", 0))
    let porcentagem = parseFloat(window.prompt("qual a porcentagem do reajuste? (em décimos)", 0))
    document.getElementById("result").innerHTML = "Seu salário reajustado é: R$" + parseFloat(salario + salario*porcentagem)
}