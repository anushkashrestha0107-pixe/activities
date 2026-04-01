// Theme Toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

// Calculator Logic
let output = document.getElementById("output-value");
let history = document.getElementById("history-value");

let expression = "";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.id;

        if (value === "clear") {
            expression = "";
            output.innerText = "0";
            history.innerText = "";
        }
        else if (value === "backspace") {
            expression = expression.slice(0, -1);
            output.innerText = expression || "0";
        }
        else if (value === "=") {
            try {
                let result = eval(expression);
                history.innerText = expression;
                output.innerText = result;
                expression = result.toString();
            } catch {
                output.innerText = "Error";
                expression = "";
            }
        }
        else if (value) {
            expression += value;
            output.innerText = expression;
        }
    });
});
