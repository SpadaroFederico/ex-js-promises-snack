// 🏆 Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

// function lanciaDado(){
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             const incastrato = Math.floor(Math.random()* 10) + 1
//             if (incastrato <= 2){
//                 reject("NOOOO, il dado si è incastrato")
//             }else{
//                 const risultato = Math.floor(Math.random()* 6) + 1
//                 resolve(`E' uscito il numero ${risultato}`)
//             }
//         }, 3000)
//     }
// )
// }

// lanciaDado()
// .then(result => console.log(result))
// .catch(error => console.error(error))



// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

function creaLanciaDado(){
    let ultimoRisultato = null

    return function lanciaDado(){
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const incastrato = Math.floor(Math.random()* 10) + 1
            if (incastrato <= 2){
                reject("NOOOO, il dado si è incastrato")
            }else{
                const risultato = Math.floor(Math.random()* 6) + 1

                if (ultimoRisultato === risultato){
                    console.log("Incredibile!!");
                    }
                    
                    ultimoRisultato = risultato
                    resolve (`è uscito ${ultimoRisultato}`)
            }
        }, 3000)
    }
)
}
}

const lanciaDado = creaLanciaDado();

lanciaDado()
    .then(res => console.log(res))
    .catch(err => console.error(err));

setTimeout(() => {
    lanciaDado()
        .then(res => console.log(res))
        .catch(err => console.error(err));
}, 3000);