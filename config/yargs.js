
const opts = {
	base:{
		demand:true,
		alias:'b'
	},
	limite:{
		alias:'l',
		default:10
	}
}

//la diferencia entre ./ y no, es que uno es una path dentro de mi directorio a importar y el otro es un paquete del node_modules
//command(comando, mensaje de ayuda por consola, es un objeto y se especifican los flags a recibir... demand es que sea obligatorio, alias es otro nombre para el flag)
//help(), es para que aparezca en el mensaje de ayuda mi comando
const argv = require('yargs')
	.command('listar','Imprime en consola la tabla de multiplicar',opts)
	.command('crear', 'Crea un archivo de la tabla de multiplicar',opts)
	.help()
	.argv;

module.exports = {
	argv
}