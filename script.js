// Basic operations
const sum = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => (num2 !== 0 ? num1 / num2 : "Error");

// Variables to store the calculator input
let num1 = "";
let num2 = "";
let operator = "";
let displayNum = "";
const screen = document.querySelector(".display");

// Handle numeric button clicks
const numKeys = document.querySelectorAll(".numKeys button");
numKeys.forEach((button) => {
    button.addEventListener("click", (e) => {
        const digit = e.target.textContent;

        if (!operator) {
            num1 += digit; // Append to num1
            displayNum = num1;
        } else {
            num2 += digit; // Append to num2
            displayNum = num2;
        }

        screen.textContent = displayNum;
    });
});

// Handle operator button clicks
const oprKeys = document.querySelectorAll(".oprKeys button");
oprKeys.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (!num1) return; // Prevent operator selection without a number
        operator = e.target.textContent;
    });
});

// Perform calculation
const operate = (num1, num2, operator) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === "+") return sum(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
    return "Error";
};

// Handle equals button
const equals = document.querySelector("#equal");
equals.addEventListener("click", () => {
    if (!num1 || !num2 || !operator) return;

    const result = operate(num1, num2, operator);
    screen.textContent = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
});

// Handle clear (AC) button
const clearButton = document.querySelector(".funcKeys button:nth-child(2)");
clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    displayNum = "";
    screen.textContent = "";
});

// Handle delete button
const deleteButton = document.querySelector(".funcKeys button:nth-child(3)");
deleteButton.addEventListener("click", () => {
    if (operator) {
        num2 = num2.slice(0, -1);
        displayNum = num2;
    } else {
        num1 = num1.slice(0, -1);
        displayNum = num1;
    }
    screen.textContent = displayNum;
});


