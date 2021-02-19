console.log(`Inicio del script`)

setTimeout(() => {
    console.log(`primer time out`)
}, 5000)

setTimeout(() => {
    console.log(`segundo time out`)
}, 0)

setTimeout(() => {
   console.log(`tercer time out`)
}, 0)

console.log("fin")
