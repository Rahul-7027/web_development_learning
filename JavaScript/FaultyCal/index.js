let random = Math.random()
console.log(random)

let num1 = prompt("Enter Your first number")
let operation = prompt("Enter Your Operation")
let num2 = prompt("Enter Your second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    // Perform correct calculation

    console.log(`The result is ${num1} ${operation} ${num2}`)
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`)
}
else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`)

}