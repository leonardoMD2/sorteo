

const jsConfetti = new JSConfetti()

const start = document.querySelector(".start")
const reiniciar = document.querySelector(".reiniciar")
const ultimoNumero = document.querySelector(".numeroReciente")
const jugados = document.querySelector(".jugados")
let numerosJugados = []


start.addEventListener("click", ()=>{
    let max = 90
    let min = 1
    let congrats = false
    
    if (numerosJugados.length == 0){
        let numeroElegido = Math.floor(Math.random() * (max - min + 1)) + min;
        ultimoNumero.textContent = numeroElegido
        numerosJugados.push(numeroElegido)
    }else{
        
        
        jugados.innerHTML = `Jugados: ${numerosJugados}` 
        

        numeroElegido = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!numerosJugados.includes(numeroElegido)){
            numerosJugados.push(numeroElegido)
            ultimoNumero.textContent = numeroElegido
        }else{
            console.log(`Elegido repetido 1°:${numeroElegido}`)
           
            let continuar = true

            while(continuar && !congrats ){
                 numeroElegido = Math.floor(Math.random() * (max - min + 1)) + min;
                 
                 if(!numerosJugados.includes(numeroElegido)){
                    numerosJugados.push(numeroElegido)
                    ultimoNumero.textContent = numeroElegido
                    continuar = false
                    console.log(`Elegido sin repetir:${numeroElegido}, Jugados:${numerosJugados}`)
                }else if(numerosJugados.length >= 90){
                    congrats=true
                    console.log("juego terminado")
                    jsConfetti.addConfetti()
                }
            }
        }

        
    }

    
    })


reiniciar.addEventListener("click",()=>{
    console.log(numerosJugados)
    numerosJugados = []
    ultimoNumero.textContent = ""
    console.log(numerosJugados)
    jugados.textContent =""
    
})