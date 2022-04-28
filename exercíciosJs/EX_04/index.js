ShowPrompt = () =>{
    custoFabrica = parseFloat(window.prompt(`Entre com o custo de fábrica do veículo:`, 0));
    document.getElementById("result").innerHTML =`Preco do carro: ${custoFabrica + (custoFabrica*0.28) + (custoFabrica*0.45)}`
}