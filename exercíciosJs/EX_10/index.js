ShowPrompt = () =>{
    document.getElementById("name").innerHTML = window.prompt(`Qual o seu nome?`)

    let dtNasc = window.prompt(`Qual a sua data de nascimento? (ex: 01/01/2022)`)
    dtNasc = dtNasc.split('/');
    dtNasc = new Date(dtNasc[2], dtNasc[1]-1, dtNasc[0])

    let dtInicio = window.prompt(`Qual a data que engressou na empresa? (ex: 01/01/2022)`)
    dtInicio = dtInicio.split('/');
    dtInicio = new Date(dtInicio[2], dtInicio[1]-1, dtInicio[0])

    document.getElementById("data").innerHTML = `Idade: ${(diffTime(Date.now(), dtNasc)/8766).toFixed(2)} anos | Tempo de Contribuicao: ${(diffTime(Date.now(), dtInicio)/8766).toFixed(2)} anos`

    document.getElementById("result").innerHTML = diffTime(Date.now(), dtNasc) >= 65*8766 || diffTime(Date.now(), dtInicio) >= 30*8766 ? "Requerer aposentadoria" :
        diffTime(Date.now(), dtNasc) >= 60*8766 && diffTime(Date.now(), dtInicio) >= 25*8766 ? "Requerer aposentadoria" :
            "Não requerer"
    
    
}

function diffTime(dt1, dt2){
    let diff = (dt1 - dt2) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
}