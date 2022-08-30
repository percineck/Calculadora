const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        res.value = "Resultado indefinido";
        setTimeout(() => {
            res.value = "";
        }, 1300);
    } else {
        res.value = calculatedValue;
    }
}


// Exibe o valor inserido na tela.
function liveScreen(enteredValue) {
    if (!res.value) {
        res.value = "";
    }
    res.value += enteredValue;
}

// Adicionando manipulador de eventos no documento para manipular entradas de teclado
document.addEventListener("keydown", keyboardInputHandler);

// função para lidar com entradas de teclado
function keyboardInputHandler(e) {
    // para corrigir o comportamento padrão do navegador,
    // enter e backspace estavam causando um comportamento indesejado quando alguma tecla já estava em foco.
    e.preventDefault();
    // pegando a tela ao vivo

    // Numeros
    if (e.key === "0") {
        res.value += "0";
    } else if (e.key === "1") {
        res.value += "1";
    } else if (e.key === "2") {
        res.value += "2";
    } else if (e.key === "3") {
        res.value += "3";
    } else if (e.key === "4") {
        res.value += "4";
    } else if (e.key === "5") {
        res.value += "5";
    } else if (e.key === "6") {
        res.value += "6";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "8") {
        res.value += "8";
    } else if (e.key === "9") {
        res.value += "9";
    }

    // Operadores
    if (e.key === "+") {
        res.value += "+";
    } else if (e.key === "-") {
        res.value += "-";
    } else if (e.key === "*") {
        res.value += "*";
    } else if (e.key === "/") {
        res.value += "/";
    }

    // decimal key
    if (e.key === ".") {
        res.value += ".";
    }

    // Aperte enter para ver o resultado
    if (e.key === "Enter") {
        calculate(result.value);
    }

    // backspace para remover a última entrada
    if (e.key === "Backspace") {
        const resultInput = res.value;
        // remova o último elemento da string
        res.value = resultInput.substring(0, res.value.length - 1);
    }
}