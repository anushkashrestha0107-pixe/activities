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
    let outputEl = document.getElementById("output-value");

    if (num == "") {
        outputEl.innerText = "";
    } else {
        outputEl.innerText = getFormattedNumber(num);
    }

    // Add pop animation
    outputEl.classList.remove("pop");
    void outputEl.offsetWidth; // restart animation
    outputEl.classList.add("pop");
}

function getFormattedNumber(num) {
    if (num == "-") return "";
    return Number(num).toLocaleString("en");
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

/* OPERATORS */
let operators = document.getElementsByClassName("operator");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {

        // Button press animation
        this.style.transform = "scale(0.92)";
        setTimeout(() => this.style.transform = "", 100);

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
                    let opMap = {
                        plus: "+",
                        minus: "-",
                        multiply: "*",
                        divide: "/",
                        percent: "%"
                    };

                    history += opMap[this.id] || "";
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

        this.style.transform = "scale(0.92)";
        setTimeout(() => this.style.transform = "", 100);

        let output = reverseNumberFormat(getOutput());

        if (!isNaN(output)) {
            output = output + this.innerText;
            printOutput(output);
        }
    });
}

/* THEME TOGGLE */
document.getElementById("theme-toggle")
    .addEventListener("change", function () {
        document.body.classList.toggle("dark");
    });