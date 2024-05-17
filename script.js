function solicitarNumero() {
    let numero;
    do {
        numero = prompt("Introduce un número para calcular su factorial:");
        if (numero === null) {
            // Si el usuario cancela, salir del bucle
            return null;
        }
        numero = Number(numero);
        if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
            alert("Por favor, introduce un número entero no negativo válido.");
        }
    } while (isNaN(numero) || !Number.isInteger(numero) || numero < 0);
    return numero;
}

function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

function mostrarResultado(factorial) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>El factorial es: ${factorial}</p>`;
}

function ejecutarPrograma() {
    const numero = solicitarNumero();
    if (numero !== null) { // Verifica que el usuario no haya cancelado
        const factorial = calcularFactorial(numero);
        mostrarResultado(factorial);
    }
}

// Ejecutar el programa cuando se cargue la página
window.onload = ejecutarPrograma;
