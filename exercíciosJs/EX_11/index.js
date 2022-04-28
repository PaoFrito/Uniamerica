ShowPrompt = () =>{
    type = window.prompt(`Qual tipo de voce deseja? (A)-álcool (G)-gasolina`)
    litros = parseFloat(window.prompt(`Quantos litros?`))
    
    if(type == "A"){
        preco = litros*2.9
        litros <= 20 ? preco -= preco*0.03 : preco -= preco*0.05
    }else{
        preco = litros*3.3
        litros <= 20 ? preco -= preco*0.04 : preco -= preco*0.06
    }

    document.getElementById("result").innerHTML = `O valor a ser pago será R$${preco}`
}