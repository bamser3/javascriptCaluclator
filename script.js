
// Function to add results from the operation functions into the calculationHistory array
// Takes the result of each operation, the operator based on the operation function and the 
// operands of the function as parameters which are decided within the operation functions

function addToHistory(result, operator, operands) {
    calculationHistory.push(
        {
            operands: operands,
            operator: operator,
            result:result
        }
    ) 
}

// Addition function applies operator on two parameters inputted a and b.

function add(a, b) {
    const result = a + b
    addToHistory(result, "+", [a, b])
    return result;
}

// Subtraction function applies operator on two parameters inputted a and b.


function subtract(a,b) {
    const result = a - b
    addToHistory(result, "-", [a, b]) 
    return result;
}

// Multiplication function applies operator on two parameters inputted a and b.


function multiply(a,b) {
    const result = a * b
    addToHistory(result, "*", [a, b])
    return result;
}

// Division function applies operator on two parameters inputted a and b.


function divide(a,b) {
    const result = a / b
    addToHistory(result, "/", [a, b]) 
    return result;
}

function displayHistory() {
    if (calculationHistory.length === 0 ) {
        console.log("No calculations stored.")
    }
    else {
        console.log(calculationHistory)
    }
}

calculationHistory = []


// TESTING

displayHistory() // should say: No calcuations stored.

add(5,5) // should save: { operands: [ 5, 5 ], operator: '+', result: 10 } , to calcuation history.

subtract(10,5) // should save: { operands: [ 5, 5 ], operator: '+', result: 10 } , to calcuation history.

multiply(20,4) // should save: { operands: [ 5, 5 ], operator: '+', result: 10 } , to calcuation history.

divide(30,15) // should save: { operands: [ 30, 15 ], operator: '/', result: 2 } , to calcuation history.

displayHistory() 

/*

 should display as: [
  { operands: [ 5, 5 ], operator: '+', result: 10 },
  { operands: [ 10, 5 ], operator: '-', result: 5 },
  { operands: [ 20, 4 ], operator: '*', result: 80 },
  { operands: [ 30, 15 ], operator: '/', result: 2 }
]

*/

// ALL CHECKS PASSED!!