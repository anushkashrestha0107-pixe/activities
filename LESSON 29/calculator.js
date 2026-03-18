function clearScreen() {
    document.getElementById("result").value = "";
}

// Appends the clicked button's value to the display
function setscreenValue(value) {
  const r = document.getElementById("result");
if (r.value === "Enter an expression" || r.value === "Error") 
    r.value = value;
} 


// Calculates the expression in the display and shows the result
function calculateResult() {
    const r = 
    document.getElementById("result");
    const expression = resultElement.value.trim();
    
        // Check if the expression is empty
    if (expression === "") {
        resultElement.value = "Enter an expression";
        return;
    }
    
    // Evaluate the expression and handle errors
    try {
        resultElement.value = eval(expression);
    } catch (error) {
        resultElement.value = "Error";
    }
}