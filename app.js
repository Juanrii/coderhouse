var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function mostrarDias(dias) {
    let mensaje;
    let op;

    /*  Si el usuario ingresa algo distinto a 'pares' o 'impares'
        se le vuelve a pedir el ingreso del mensaje. */
    do {
        mensaje = prompt("Eliga dias pares o impares?: ");
        op = mensaje.toLowerCase();
    } while (op != 'pares' && op != 'impares');

    calcularDias(op);
};

function calcularDias(op) {
    switch (op) {
        case 'pares':
            console.log("Los dias PARES son: ");
            for (var i = 0; i <= dias.length; i++) {
                if(i == 7) {
                    /*  El largo del array dias es 7, por eso para
                        obtener el ultimo dia le resto 1, ya que
                        sino daria UNDEFINED. */
                    alert("El dia siete es: " + dias[dias.length - 1]);
                } else if(i % 2 == 0){
                        console.log("Dia " + i + " " + dias[i]);
                        /*  Dia 0 Domingo
                            Dia 2 Martes
                            Dia 4 Jueves
                            Dia 6 Sabado */
                }
            }
            break;
        case 'impares':
            console.log("Los dias IMPARES son: ");
            for (var i = 0; i <= dias.length; i++) {
                if(i == 7) {
                    alert("El dia siete es: " + dias[dias.length - 1]);
                } else if(i % 2 == 1){
                        console.log("Dia " + i + " " + dias[i]);
                        /*  Dia 1 Lunes
                            Dia 3 Miercoles
                            Dia 5 Viernes   */
                }
            }
            break;
    };
}

mostrarDias(dias);