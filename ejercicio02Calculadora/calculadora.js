console.log("MiCalculadora")
console.log("resta 1 + 2 + 3 + 4 + 5 " +resta(1,2,3,4,5))
var display=0;
var displayResta=0;
console.log("pulso el 1 y resta " +resta(1))
console.log("pulso el 2 y resta " +resta(2))
console.log("pulso el 3 y resta " +resta(3))
console.log("pulso el 4 y resta " +resta(4))
function sumar(primero, segundo){
    if(arguments.callee.length == arguments.length) {
        return primero + segundo;
    } else if(arguments.callee.length < arguments.length) {
        var resultado = sumar(arguments[0], arguments[1])
        for(let i= 2; i<arguments.length; i++) {
            resultado= resultado + arguments[i];
        } 
        return resultado;
    } else if (arguments.length ==1) {
        display= sumar (display,primero);
        return display;
    }
}


function restar(primero, segundo){
    if(arguments.callee.length == arguments.length) {
        return primero - segundo;
    } else if(arguments.callee.length < arguments.length) {
        var resultado = restar(arguments[0], arguments[1])
        for(let i= 2; i<arguments.length; i++) {
            resultado= resultado + arguments[i];
        } 
        return resultado;
    } else if (arguments.length ==1) {
        displayResta= restar (displayResta,primero);
        return displayResta;
    }
}
function multiplicar(primero, segundo){
    if(arguments.callee.length == arguments.length) {
        return primero * segundo;
    }
}
function dividir(primero, segundo){
    if(arguments.callee.length == arguments.length) {
        return primero / segundo;
    }
}