const x = parseInt(prompt("Enter a number"))

let num1 = 0
let num2 = 1
let fibonacci = 0

for(let i = 0; i < x; i++) {
    
    console.log(num1)
    fibonacci = num1 + num2
    num1 = num2
    num2 = fibonacci

}