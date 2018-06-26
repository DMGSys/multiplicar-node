const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//console.log(argv);
let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        // console.log('Listar');
        break;
    case 'crear':
        console.log('crear');
        break;

    default:
        console.log('comando no reconocido');;
}

//let base = '7';
//console.log(process);
//let argv2 = process.argv;
//console.log(argv.base);
//console.log('Limite', argv.limite);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(e => console.log(e));