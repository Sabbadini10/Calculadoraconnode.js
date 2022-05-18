const raizCuadrada = require('./modulos/raizCuadrada');
const resta = require('./modulos/resta');
const division = require('./modulos/division');
const multiplicacion = require('./modulos/multiplicacion');
const porcentaje = require('./modulos/porcentaje');
const raizCubica = require('./modulos/raizCubica');
const suma = require('./modulos/suma');
const potencia = require('./modulos/potencia');

let operacion = process.argv[2]
let numeroA = +process.argv[3];
let numeroB = +process.argv[4];
let resultado;


   switch (operacion) {
       case 'raizCuadrada':
            resultado = raizCuadrada(numeroA)
           break;
        case 'suma': 
            resultado = suma(numeroA, numeroB)
            break;
        case 'resta': 
            resultado = resta(numeroA, numeroB)
            break;
        case 'multiplicacion':
            resultado = multiplicacion(numeroA, numeroB)
            break;
        case 'division':
            resultado = division(numeroA, numeroB)
            break;
        case 'porcentaje':
            resultado = porcentaje(numeroA, numeroB)
                break;
        case 'raizCubica': 
            resultado = raizCubica(numeroA)
            break;
        case 'potencia':
            resultado = potencia(numeroA, numeroB)
            break;
        default :
            resultado = 'No se encuentra la operacion solicitada'
           break;
   }

   console.log(resultado)


 