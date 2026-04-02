     function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = "";
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == "-") return "";
    let n = Number(num);
    return n.toLocaleString("en");
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

/* OPERATORS */
let operators = document.getElementsByClassName("operator");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {

        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }

        else if (this.id == "backspace") {
            let output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.slice(0, -1);
                printOutput(output);
            }
        }

        else {
            let output = getOutput();
            let history = getHistory();

            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.slice(0, -1);
                }
            }

            if (output != "" || history != "") {
                output = output == "" ? "" : reverseNumberFormat(output);
                history = history + output;

                if (this.id == "equals") {
                    try {
                        let result = eval(history);
                        printOutput(result);
                        printHistory("");
                    } catch {
                        printOutput("Error");
                    }
                } else {
                    // Map IDs to actual operators
                    let opMap = {
                        plus: "+",
                        minus: "-",
                        multiply: "*",
                        divide: "/",
                        percent: "%"
                    };

                    history = history + (opMap[this.id] || "");
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

/* NUMBERS */
let numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        let output = reverseNumberFormat(getOutput());

        if (!isNaN(output)) {
            output = output + this.innerText;
            printOutput(output);
        }
    });
}

/* THEME TOGGLE */
let toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});