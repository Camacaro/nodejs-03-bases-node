
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

//_ es el nombre del array que almacena los comandos
let comando = argv._[0];

switch( comando ) {

	case 'listar':
		listarTabla( argv.base, argv.limite )
			.then( data => console.log(data) )
			.catch( e => console.log(e) )
	break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then( archivo => console.log(`Archivo creado: ${archivo}`) )
			.catch(e => console.log(e))
	break;

	default:
		console.log('Comando no reconocido');
}

//let base = '4';

//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);
//console.log('limite',argv.limite);


//let parametro = argv[2];
//convierte un string a un arreglo
//let base = parametro.split('=')[1];

/*crearArchivo(base)
	.then( archivo => console.log(`Archivo creado: ${archivo}`) )
	.catch(e => console.log(e));*/