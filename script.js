//console.log("Aqui por empezar a trabajar en mi calculadora!!!");

const txtOp1 = document.getElementById("operador1"); //accedemos a mi documento html por id (por eso es que el id debe ser unico)
const txtOp2 = document.getElementById("operador2");
const txtOperacion = document.getElementById("operacion");
const btnCalcular = document.getElementById("calcular");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById('resultado2');

/*
console.log(txtOp1);
console.log(txtOp2);
console.log(txtOperacion);
console.log(btnCalcular);
console.log(resultado1);
*/

let validarOperacion = () => {
    let resp = (txtOperacion.value=="+" || txtOperacion.value=="-" || txtOperacion.value=="*" || txtOperacion.value=="/");
    return resp;
}

let validarOperando = (operando) => {
    if(operando.length > 0){
        let band = 0;
        let i = 0;
        let contPuntos=0;
        /*
        for(let i=0;i<operando.length;i++){
            console.log("caracter "+i+" "+operando[i]);
        }
        */
        while(i<operando.length && band==0){
            if((operando[i].charCodeAt()>=48 && operando[i].charCodeAt()<=57) || (operando[i].charCodeAt()==46)){   //para evitar preguntar por cada digito utilizo directamente el codigo ansi de cada numero en un rango
                if(operando[i].charCodeAt() == 46){
                    contPuntos++;
                }
                i++;
            }
            else{
                band=1;
            }
        }
    
        //console.log("cantidad de puntos: "+contPuntos);
        if(band==0 && contPuntos<=1){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

let calcular = () => {
    //console.log("apretaste el boton calcular!!!");
    //console.log(txtOperacion.value); //.value me devuelve el valor que tiene el input actualmente
    //const operador = txtOperacion.value;

    /*
    if(validarOperacion() == true){
        //console.log("calculo posible!!!");
        resultado1.innerText = "Calculo posible, operador valido!!!";
    }
    else{
        //console.log("Calculo imposible");
        resultado1.innerText = "Calculo Imposible, operador no valido!!!";
    }
    */
    /*
    validarOperando(txtOp1.value);
    console.log("es valido el numero??: "+validarOperando(txtOp1.value));

    validarOperando(txtOp2.value);
    console.log("es valido el numero??: "+validarOperando(txtOp2.value));
    */
    /*
    if(validarOperando(txtOp1.value) == true){
        resultado1.innerText = "Operador 1 valido!!!";
    }
    else{
        resultado1.innerText = "Operador 1 no valido!!!";
    }

    if(validarOperacion() == true){
        //console.log("calculo posible!!!");
        resultado1.innerText = resultado1.innerText + "Calculo posible, operacion valida!!!";
    }
    else{
        //console.log("Calculo imposible");
        resultado1.innerText = resultado1.innerText + "Calculo Imposible, operacion no valida!!!";
    }

    if(validarOperando(txtOp2.value) == true){
        resultado1.innerText = resultado1.innerText + "Operador 2 valido!!!";
    }
    else{
        resultado1.innerText = resultado1.innerText + "Operador 2 no valido!!!";
    }
    */
    //console.log("Es un numero?? "+isNaN(parseInt(txtOp1.value)));  //isNaN te devuelve true cuando un valor pasado por parametro No es un numero
    //console.log("Es un numero?? "+isNaN(parseInt(txtOp2.value)));

    //to do lo anterior seria mas que nada para mostrar mensajes:
    // ahora se vendria el calculo:
    let op1 = parseFloat(txtOp1.value);
    let op2 = parseFloat(txtOp2.value);

    //console.log("Mi numero es: "+parseFloat("+1222+23fff")); nota: no te convierte todo el nro sino que va viendo el nro de izq a der y lo va convirtiendo a int hasta que encuentra algo que no es un nro y se detiene automaticamente

    if(validarOperando(txtOp1.value)==true && validarOperando(txtOp2.value)==true && !isNaN(op1) && !isNaN(op2) && validarOperacion()==true){  //validarOperando(txtOp1.value)==true && validarOperando(txtOp2.value)==true ya no uso mi funcion ya que JS tiene una funcion predefinida para saber si lo que me ingresaron es un numero o no
        let rdo;

        switch(txtOperacion.value){
            case "+":
                rdo = op1 + op2;
                break;
            case "-":
                rdo = op1 - op2;
                break;
            case "*":
                rdo = op1 * op2;
                break;
            case "/":
                rdo = op1 / op2;
                break;
        }

        resultado1.style = "color:black"
        resultado1.innerText = "Ingrese dos valores y un operando!!!";
        
        resultado2.style = "color:black"
        resultado2.innerText = "Rdo = " + rdo.toFixed(2);  //.toFixed(2) para mostrar dos numeros despues de la coma, tener el cuenta que redondea hacia arriba
    }
    else{
        resultado1.style = "color:red"
        resultado1.innerText = "Calculo Imposible!!!";

        resultado2.style = "color:red"
        resultado2.innerText = "Error!!!"
    }
}

// agregamos el evento o accion al boton:
btnCalcular.addEventListener('click', calcular);


let btnLimpiar = document.getElementById("limpiar");

let limpiar = () => {
    resultado1.style = "color:black"
    resultado1.innerText = "Ingrese dos valores y un operando!!!";

    resultado2.style = "color:black"
    resultado2.innerText = "Esperando dos valores y un signo, ajjaaj!!!";
    txtOp1.value = "";
    txtOperacion.value = "";
    txtOp2.value = "";
}

btnLimpiar.addEventListener('click', limpiar);
