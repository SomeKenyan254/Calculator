const sum = (a,b) => (a + b)
const subtract = (a,b) => (a - b)
const multiply = (a,b) => (a * b)
const divide = (a,b) => (a / b)

//Variables that hold the variables for the calculator operations
let num1 = "";
let num2 = "";
let operator = "";
let displayNum = ""

//Function that calls on the  operation
const operate =() => {
    if (operator == "+" ){
     return sum(num1,num2)
    }
    else if
        (operator == "-" ){
            return subtract(num1,num2)
        }
    else if
        (operator == "*" ){
            return multiply(num1,num2)
        }
    else if(operator == "/"){
        return divide(num1,num2)
    }
    else{
        return
    }
}


const screen = document.querySelector(".display")

let newNum = (value) => {

    displayNum += value //apend to current display value

  screen.textContent = displayNum //update with new value
}
const btn = document.querySelectorAll(".buttons");
 btn.forEach(button => {
    button.addEventListener("click",(e) =>{
    const value = e.target.id
    newNum(value)

   })
 })
