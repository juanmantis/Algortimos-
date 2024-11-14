// Saludar

function saludar() {
    alert("Hola Usuario");     
}

function opBasicas() {
    // Declaro las variables necesarias para la ejecución
    let A,B,S,R,M,D = 0;
    // Notifico al usuario que realiza este algoritmo
    alert("Este algoritmo realiza una suma, resta, multiplicación y división entre dos valores ingresados");
    // Capturar los datos de entrada o Inputs
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));
    // Realizar el procedimiento
    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;
    // Dar el resultado
    alert("El resultado de la suma es " + S);
    alert("El resultado de la resta es " + R);
    alert("El resultado de la multiplicación es " + M);
    alert("El resultado de la división es " + D);
}



function areaTriangulo() {
    let B,H,A = 0;

    alert("Este algoritmo calcula el area de un triángulo a partir de su base y su altura");
    
    B = parseInt(prompt("Por favor ingrese el valor de la base"));
    H = parseInt(prompt("Por favor ingrese el valor de la altura"));
    
    A = (B*H)/2;

    alert("El area del triangulo " + A);
}

function conversionUnidades() {

    let M,P,CM,KM = 0;

    alert("Este algoritmo convierte en centimetros, pulgadas y kilometros un valor dado en metros");

    M = parseInt(prompt("Ingrese el valor en metros a convertir"));

    P = M * 39.37;
    CM = M * 100;
    KM = M / 1000;

    alert(M + " metros en pulgadas son " + P);
    alert(M + " metros en centrimetros son " + CM);
    alert(M + " metros en kilometros son " + KM);

}

// Algoritmos condicionales

function servicioMilitar() {
    let edad = 0;
    let genero = "";
    let hijoUnico = "";
    
    alert("Algoritmo que determina si eres apto para prestar el servicio militar obligatorio");

    edad = parseInt(prompt("Por favor ingrese su edad"));
    genero = prompt("Por favor ingrese su genero: F- Femenino o M- Masculino");
    hijoUnico = prompt("Por favor ingrese Sí o Nó, de ser hijo unico");

    if (edad>=18 && edad<=26){

        if (genero === "M"){

            if (hijoUnico === "Nó"){

                alert("Eres apto para presta el servicio militar");

            }else{
                alert("No eres apto para presta el servicio militar");
            }
        }else{
            alert("No eres apto para presta el servicio militar");
        }
    }else{
        alert("No eres apto para presta el servicio militar");
    }
}

function mayorDosN() {
    
    let N1,N2 = 0;

    alert("Valida el mayor de dos números");

    N1 = parseInt(prompt("Ingrese el primer número"))
    N2 = parseInt(prompt("Ingrese el segundo número"));

    if (N1 === N2){
        alert("No hay nungun numero mayor");
    }else if (N1>N2){
        alert(N1 + " es mayor que " + N2);
    }else{
        alert(N2 + " es mayor que " + N1);
    }
}

function paroImpar() {
    
    let X=0;

    alert("Determina si un numero es par o impar");

    X = parseInt(prompt("Ingrese el numero a verificar"));

    if (X % 2 === 0){
        alert(X + " es un numero par");
    }else{
        alert(X + " es un numero impar");
    }
}

function rangoNumeros() {
    
    alert("Imprimir en consola los numeros existentes entre el valor inicial y el valor final")

    let inicio = parseInt(prompt("Ingrese el valor de punto de partida"));
    let fin = parseInt(prompt("Ingrese el valor del punto final"));

    let contador = inicio;

    while(contador <= fin){
        console.log(contador);

        contador ++;
    }

    alert("En consola mostraremos los numeros que hay entre " + inicio + " y " + fin);
}

function sumaRango() {
    
    alert("Suma los valores entre un rango ingresado");

    let inicio = parseInt(prompt("Ingrese el punto de partida"));
    let fin = parseInt(prompt("Ingrese el punto final"));

    let suma = 0;

    contador = inicio;

    while (contador <= fin){
        suma += contador;

        contador ++;
    }

    alert("La suma de los números del " + inicio + " al " + fin + " es " + suma);

}

function esPrimo() {
    
    alert("Este algoritmo determina si un número es primo");

    let numero = parseInt(prompt("Ingrese el número"));

    if (numero<=1){
        alert(numero + " no es número primo");
    }

    for(let i = 2; i <= numero/2; i++){

        if (numero % i === 0){
            alert(numero + " no es un número primo");
            return;
        }
    }
    alert(numero + " si es un número primo");
}

function conversionMoneda() {
    
    // Objeto como datos de partida
    let tasaCambio = {
        USD : 0.00028,
        EUR : 0.00024,
        YEN : 0.035
    }

    alert("Realiza la conversión de dinero en pesos colombianos a dolares, euros o yenes");

    let cantidadPesos = parseFloat(prompt("ingrese la cantidad de pesos colombianos a convertir"));
    let tasa = parseInt(prompt("Seleccione la divisa a cambiar: USD = 1, EUR = 2, YEN = 3"));
    let conversion;

    switch (tasa) {
        case 1:
            conversion = cantidadPesos * tasaCambio.USD;
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " dolares");
            break;
        case 2:
            conversion = cantidadPesos * tasaCambio.EUR;
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " euros");
            break;
        case 3:
            conversion = cantidadPesos * tasaCambio.YEN;
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " yenes");
            break;
        default:
            alert("Tasa de cambio no permitida");
            break;
    }
}

function calcularPromedio() {
    
    alert("Este algoritma determina el promedio de calificaciones ingresadas por el usuario");

    let calificaciones = [];

    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones"));

    for (let i = 1; i <= cantidadNotas; i++){
        calificaciones.push(parseFloat(prompt("Ingrese la calificacion #" + i + " :")));
    }

    let sumaCalif = 0;
    for(let calificacion of calificaciones){
        sumaCalif += calificacion;
    }
    
    let promedio = sumaCalif/calificaciones.length;

    alert("El promedio de las calificaciones es: " + promedio);
}

function consultarPeli() {
    
    alert("Este algoritmo muestra la información de una pelicula elegida")

    let peliculas = [
        {
            titulo : "El padrino",
            director : "Nombre del director",
            anio : "1972",
            genero : "Drama"
        },
        {
            titulo : "Interestellar",
            director : "Nombre del director",
            anio : "2014",
            genero : "Ficciín"
        },
        {
            titulo : "Harry Potter",
            director : "Nombre del director",
            anio : "2008",
            genero : "Ficción"
        }
    ];

    let nombrePelicula = prompt("Por favor ingrese el nombre de la pelicula");

    let infoPelicula = "";

    for (let pelicula of peliculas){
        if (pelicula.titulo === nombrePelicula){
        infoPelicula = "Titulo: " + pelicula.titulo + "\n" +
                           "Director: " +  pelicula.director + "\n" +
                           "Año: " + pelicula.anio + "\n" +
                           "Genero: " + pelicula.genero;
                           break;
        }
    }

    if (infoPelicula !== ""){
        alert("La pelicula consultada tiene la siguiente información " + infoPelicula)
    }else{
        alert("La pelicula no se encuentra dentro de nuestro sistema")
    }
}

function cuadradoNumero() {
    let N,C = 0;

    alert("Este algoritmo calcula el cuadrado de un numero");
    
    N = parseInt(prompt("Por favor ingrese el numero a elevar al cuadrado"));
    
    C = N*N;

    alert("El cuadrado del numero es " + C);
}

function menorTresNumeros() {
    
    let N1,N2,N3 = 0;

    alert("Valida el menor de tres números");

    N1 = parseInt(prompt("Ingrese el primer número"));
    N2 = parseInt(prompt("Ingrese el segundo número"));
    N3 = parseInt(prompt("Ingrese el segundo número"));

    if (N1===N2 && N1===N3){
        alert("No hay ningun numero mayor");
    }else if (N1<N2 && N1<N3){
        alert(N1 + " es menor que los numeros " + N2 + " y " + N3);
    }else if (N2<N1 && N2<N3){
        alert(N2 + " es menor que los numeros " + N1 + " y " + N3);
    }else{
        alert(N3 + " es menor que los numeros " + N1 + " y " + N2);
    }
}


function validarMaterias() {
    
    alert("Este algoritmo determina si aprueba o reprueba una materia en base a sus 9 calificaciones" + "\n" +
        "Las calificaciones tienen que ser entre 1 y el 10");
    let nombre, materia = "";

    nombre = prompt("Ingrese su nombre");
    materia = prompt("Escriba el nombre de la materia a verificar si aprobo o reprobo")

    let calificaciones = [];

    let cantidadNotas = 9;

    for (let i = 1; i <= cantidadNotas; i++){
        calificaciones.push(parseFloat(prompt("Ingrese la calificacion #" + i + " :")));

    }

    let sumaCalif = 0;
    for(let calificacion of calificaciones){
        sumaCalif += calificacion;
    }
    
    let promedio = sumaCalif/cantidadNotas;

    if (promedio>=6.1){
        alert("Estudiante " + nombre + " usted aprobo la materia " + materia + " con una nota final de " + promedio);
    }else{
        alert("Estudiante " + nombre + " usted reprobo la materia " + materia + " con una nota final de " + promedio);
    }
}

function interesesBanco() {
    let capital, intereses = 0;
    let N = 1;

    alert("Este algoritmo calcula los intereses de un banco en N numero de años al depositar su capital en el banco");
    
    capital = parseInt(prompt("Por favor ingrese el capital a depositar en el banco"));
    N = parseInt(prompt("Por favor ingrese la cantidad de años"));

    for (let i = 1; i <= N*12; i++){
        intereses += (capital*0.007);
    } 

    alert("El total de intereses ganado en " + N + " años es " + intereses+ " pesos");
}