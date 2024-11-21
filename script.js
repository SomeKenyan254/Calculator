const sum = (a,b) => (a + b)
const subtract = (a,b) => (a - b)
const multiply = (a,b) => (a * b)
const divide = (a,b) => (a / b)

//Variables that hold the variables for the calculator operations
let num1 = "";
let num2 = "";
let operator = "";


//Function that calls on the  operation
const operate = function(){
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
