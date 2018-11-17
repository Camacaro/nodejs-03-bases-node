// requierds
const fileSystem = require('fs');

let listarTabla = (base, limite) => {

	return new Promise ( (resolve, reject)  => {

		if ( !Number(base) | !Number(limite) ) {
			reject(`EL valor introducido de la base ${base} o limite ${limite} no es un numero`);
			return;
		} else {
			let data = '';
			for (var i = 1;  i <= limite; i++) {
				data += `${base} * ${i} = ${base*i} \n`;
			}

			resolve(data);
		}

	});
};


//module.exports.crearArchivo = 
let crearArchivo = (base, limite) => {

	return new Promise ( (resolve, reject) => {
		
		if (!Number(base)) {
			reject(`El valor introducido ${base} no es un numero`);
			return;
		}

		let data = '';

		for (let i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base*i} \n`;
		}

		//.writeFile(ruta de archivo y nombre, contenido del archivo, function)
		fileSystem.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
			if(err) 
				reject(err);
			else
				resolve(`tabla-${base}.txt`);
		});
	});
};

//crearArchivo:crearArchivo
module.exports = {
	crearArchivo,
	listarTabla
}

