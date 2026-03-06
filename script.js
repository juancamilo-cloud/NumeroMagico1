
 //  VARIABLES PRINCIPALES


let numeroSecreto;
let intentos;
let maxIntentos = 10;
let intentosPrevios = [];


 //  INICIAR JUEGO


function iniciarJuego() {

    // Generar número aleatorio entre 1 y 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // Reiniciar variables
    intentos = 1;
    intentosPrevios = [];

    // Limpiar interfaz
    document.getElementById("message").textContent = "";
    document.getElementById("history").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("resetBtn").style.display = "none";
}

// Ejecutar al cargar la página
window.onload = iniciarJuego;


   //EVENTO BOTÓN INTENTAR


document.getElementById("guessBtn").addEventListener("click", function() {

    let input = document.getElementById("guessInput");
    let mensaje = document.getElementById("message");
    let historial = document.getElementById("history");

    let numeroUsuario = parseInt(input.value);

    // Validación
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.textContent = "⚠️ Ingresa un número válido entre 1 y 100.";
        return;
    }

    // Guardar intento
    intentosPrevios.push(numeroUsuario);

    // Mostrar historial
    historial.textContent = "Intentos anteriores: " + intentosPrevios.join(", ");

    // Verificar
    if (numeroUsuario === numeroSecreto) {
        mensaje.textContent = "🎉 ¡Felicidades! Adivinaste en " + intentos + " intentos.";
        finalizarJuego();
    }
    else if (intentos >= maxIntentos) {
        mensaje.textContent = "❌ Juego terminado. El número era: " + numeroSecreto;
        finalizarJuego();
    }
    else {
        if (numeroUsuario < numeroSecreto) {
            mensaje.textContent = "📉 El número es MAYOR. Intento #" + intentos;
        } else {
            mensaje.textContent = "📈 El número es MENOR. Intento #" + intentos;
        }
        intentos++;
    }

    input.value = "";
    input.focus();
});

  // PERMITIR USAR ENTER


document.getElementById("guessInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        document.getElementById("guessBtn").click();
    }

});


 //  FINALIZAR JUEGO


function finalizarJuego() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("resetBtn").style.display = "inline-block";
}


  // BOTÓN REINICIAR



document.getElementById("resetBtn").addEventListener("click", iniciarJuego);
