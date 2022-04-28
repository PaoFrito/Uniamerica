ShowPrompt = () =>{
    clock = 300
    document.getElementById("result").innerHTML = ""
    for(let i = 10; i > 0; i--){
        setTimeout(()=>{
            document.getElementById("result").innerHTML += `${i} `
        }, clock)

        clock += 200    
    }
}