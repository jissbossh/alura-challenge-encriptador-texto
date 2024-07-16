//#region variables globales
var entradaTexto = document.querySelector('.texto-entrada');
var salidaTexto = document.querySelector('.texto-salida');
var seccionTexto1 = document.querySelector('.texto-informativo1');
var seccionTexto2 = document.querySelector('.texto-informativo2');
var btnCopiar = document.querySelector('.copiar');
var color = '#f1f1f1';
var logo = document.querySelector('.logo');
var header = document.querySelector('header');
var anchoPantalla = window.screen.width;
var altoPantalla = window.screen.height;
//#endregion variables globales

//#region Inicio
/**
 * Description aqui se agregan todo lo que se quiere ejecuta caundo carge la aplicaion
 */
function inicio() {
	document.body.style.padding = '0px';
	document.body.style.margin = '0px';

	//#region titulo
	var tituloPagina = document.querySelector('title');
	tituloPagina.innerHTML = 'Challenge - Encriptador de texto';
	//#endregion

	//#region icono
	let icono = document.querySelector('#icono');
	icono.rel = 'shortcut icon';
	icono.href = './image/icono.png';
	//#endregion icono

	//#region icono
	let titulo = document.querySelector('#titulo');
	//titulo.innerHTML="Encriptador de texto";
	//#endregion icono

	//#region estilos
	let estilos = document.querySelector('#estilos');
	estilos.rel = 'stylesheet';
	//estilos.rel = "text/css";
	estilos.href = './styles/style.css';
	//#endregion estilos

	//#region clase logo
	logo.src = './image/logo-alura-blu.png';
	logo.alt = 'Logo de Alura';
	//#endregion clase logo
	let wt = logo.width;

	document.addEventListener('DOMContentLoaded', function() {
		var closeModals = document.querySelectorAll('.close-modal');
		closeModals.forEach(function(closeModal) {
			closeModal.addEventListener('click', function() {});

			closeModal.addEventListener('mousemove', function() {
				closeModal.style.backgroundColor = '#db1919';
			});

			closeModal.addEventListener('mouseout', function() {
				closeModal.style.backgroundColor = 'buttonface';
			});
		});
	});

	cambioTema();
}
//#endregion Inicio

//#region Validar caracteres
/**
 * Description funcione que valida el dato ingresado en el campo de entrada no este vacio
 *
 * @param {*} texto
 * @returns {boolean}
 */
function textoVacio(texto) {
	return texto === '';
}

/**
 * Description funcion que recibe el dato ingresado en el campo de entrada y valida que este dentro de los caracteres pemitidos (en este cado que no sean letras masculas, simbolos, asentos y numeros)
 *
 * @param {*} textoValidar
 * @returns {boolean}
 */
function validarCaracteres(textoValidar) {
	//#region caracteres
	const caracteres = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'Ñ',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'Á',
		'É',
		'Í',
		'Ó',
		'Ú',
		'á',
		'é',
		'í',
		'ó',
		'ú',
		'!',
		'"',
		'#',
		'$',
		'%',
		'&',
		"'",
		'(',
		')',
		'*',
		'+',
		',',
		'-',
		'.',
		'/',
		':',
		';',
		'<',
		'=',
		'>',
		'?',
		'@',
		'[',
		'\\',
		']',
		'^',
		'_',
		'`',
		'{',
		'|',
		'}',
		'~',
		'¡',
		'¢',
		'£',
		'¤',
		'¥',
		'¦',
		'§',
		'¨',
		'©',
		'ª',
		'«',
		'¬',
		'®',
		'¯',
		'°',
		'±',
		'²',
		'³',
		'´',
		'µ',
		'¶',
		'·',
		'¸',
		'¹',
		'º',
		'»',
		'¼',
		'½',
		'¾',
		'¿',
		'×',
		'÷',
		'ß',
		'æ',
		'ð',
		'÷',
		'ø',
		'þ',
		'đ',
		'ł',
		'ŧ',
		'ƒ',
		'ǂ',
		'ȼ',
		'ɂ',
		'ʃ',
		'ˆ',
		'ˇ',
		'ˉ',
		'˘',
		'˙',
		'˚',
		'˛',
		'˜',
		'˝',
		'̑',
		'̡',
		'̢',
		'̧',
		'̨',
		'̲',
		'̳',
		'̷',
		';',
		'΄',
		'΅',
		'Ά',
		'Έ',
		'Ή',
		'Ί',
		'Ό',
		'Ύ',
		'Ώ',
		'ΐ',
		'Α',
		'Β',
		'Γ',
		'Δ',
		'Ε',
		'€',
		'£',
		'¥',
		'₩',
		'₪',
		'₫',
		'₨',
		'₱',
		'₲',
		'₳',
		'₴',
		'₵',
		'₶',
		'₷',
		'₸',
		'₹',
		'₺',
		'₻',
		'₼',
		'₽',
		'₾',
		'₿',
		'™',
		'©',
		'®',
		'℗',
		'℠',
		'℡',
		'™',
		'№',
		'←',
		'→',
		'↑',
		'↓',
		'↔',
		'↕',
		'↖',
		'↗',
		'↘',
		'↙',
		'↚',
		'↛',
		'↜',
		'↝',
		'↞',
		'↟',
		'↠',
		'↡',
		'↢',
		'↣',
		'↤',
		'↥',
		'↦',
		'↧',
		'↨',
		'↩',
		'↪',
		'↫',
		'↬',
		'↭',
		'↮',
		'↯',
		'↰',
		'↱',
		'↲',
		'↳',
		'↴',
		'↵',
		'↶',
		'↷',
		'↸',
		'↹',
		'↺',
		'↻',
		'↼',
		'↽',
		'↾',
		'↿',
		'⇀',
		'⇁',
		'⇂',
		'⇃',
		'⇄',
		'⇅',
		'⇆',
		'⇇',
		'⇈',
		'⇉',
		'⇊',
		'⇋',
		'⇌',
		'⇍',
		'⇎',
		'⇏',
		'⇐',
		'⇑',
		'⇒',
		'⇓',
		'⇔',
		'⇕',
		'⇖',
		'⇗',
		'⇘',
		'⇙',
		'⇚',
		'⇛',
		'⇜',
		'⇝',
		'⇞',
		'⇟',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0'
	];
	//#endregion caracteres
	var conteo = 0;
	for (var posicion = 0; posicion < textoValidar.length; posicion++) {
		for (var i = 0; i < caracteres.length; i++) {
			if (textoValidar.charAt(posicion) == caracteres[i]) {
				conteo++;
			}
		}
	}
	if (conteo == 0) {
		return true;
	}
	return false;
}
//#endregion Validar caracteres

//#region encriptar
/**
 * Description funcion que encripta el valor ingresado en el campo de entrada y lo muestra en el campo de salida
 */
function encriptar() {
	var texto = entradaTexto.value;
	var salida = '';
	if (!validarCaracteres(texto)) {
		mensaje('Texto no valido, verifique su texto.');
		return;
	} else if (textoVacio(texto)) {
		mensaje('Campo vacio, ingrese su texto a encriptar.');
		return;
	}

	for (var posicion = 0; posicion < texto.length; posicion++) {
		if (texto.charAt(posicion) == 'a') {
			salida = salida + 'ai';
		} else if (texto.charAt(posicion) == 'e') {
			salida = salida + 'enter';
		} else if (texto.charAt(posicion) == 'i') {
			salida = salida + 'imes';
		} else if (texto.charAt(posicion) == 'o') {
			salida = salida + 'ober';
		} else if (texto.charAt(posicion) == 'u') {
			salida = salida + 'ufat';
		} else {
			salida = salida + texto.charAt(posicion);
		}
	}
	entradaTexto.value = '';
	salidaTexto.style.backgroundImage = 'none';
	salidaTexto.value = salida;
	ocultar();
}
//#endregion encriptar

//#region desencriptar
/**
 * Description funcion que desencripta el valor ingresado en el campo de entrada y lo muestra en el campo de salida
 */
function desencriptar() {
	var texto = entradaTexto.value;
	var salida = '';
	if (!validarCaracteres(texto)) {
		mensaje('Texto no valido, verifique su texto.');
		return;
	} else if (textoVacio(texto)) {
		mensaje('Campo vacio, ingrese su texto a desencriptar.');
		return;
	}
	for (var posicion = 0; posicion < texto.length; posicion++) {
		if (texto.charAt(posicion) == 'a' && texto.charAt(posicion + 1) == 'i') {
			salida = salida + 'a';
			posicion = posicion + 1;
		} else if (
			texto.charAt(posicion) == 'e' &&
			texto.charAt(posicion + 1) == 'n' &&
			texto.charAt(posicion + 2) == 't' &&
			texto.charAt(posicion + 3) == 'e' &&
			texto.charAt(posicion + 4) == 'r'
		) {
			salida = salida + 'e';
			posicion = posicion + 4;
		} else if (
			texto.charAt(posicion) == 'i' &&
			texto.charAt(posicion + 1) == 'm' &&
			texto.charAt(posicion + 2) == 'e' &&
			texto.charAt(posicion + 3) == 's'
		) {
			salida = salida + 'i';
			posicion = posicion + 3;
		} else if (
			texto.charAt(posicion) == 'o' &&
			texto.charAt(posicion + 1) == 'b' &&
			texto.charAt(posicion + 2) == 'e' &&
			texto.charAt(posicion + 3) == 'r'
		) {
			salida = salida + 'o';
			posicion = posicion + 3;
		} else if (
			texto.charAt(posicion) == 'u' &&
			texto.charAt(posicion + 1) == 'f' &&
			texto.charAt(posicion + 2) == 'a' &&
			texto.charAt(posicion + 3) == 't'
		) {
			salida = salida + 'u';
			posicion = posicion + 3;
		} else {
			salida = salida + texto.charAt(posicion);
		}
	}
	entradaTexto.value = '';
	salidaTexto.value = salida;
	ocultar();
}
//#endregion desencriptar

//#region ocultar
/**
 * Description funcion para ocultar los textos de informcion y la imagen del campo de salida
 */
function ocultar() {
	btnCopiar.style.display = '';
	seccionTexto1.hidden = true;
	seccionTexto2.hidden = true;
	//btnCopiar.hidden = true;
	if (document.body.classList.contains('modo-oscuro')) {
		salidaTexto.style.background = '#0e0e12';
	} else {
		salidaTexto.style.background = '#f1f1f1';
	}
}
//#endregion ocultar

//#region mostrar
/**
 * Description funcion para mostar los textos de informcion y la imagen del campo de salida
 */
function mostrar() {
	seccionTexto1.hidden = false;
	seccionTexto2.hidden = false;
	btnCopiar.style.display = 'none';
	ajustarColor();
	ajustarImagen();

}
//#endregion mostrar

//#region ajustar imagen
/**
 * Description funcion para verificar el ancho del dispositivo ocultar la imagen en el campo de salida
 */
function ajustarImagen() {
	if (anchoPantalla < 1200) {
		salidaTexto.style.backgroundImage = 'none';
	}
}
// #endregion Ajustar imagen

//#region ajustar color
/**
 * Description funcion para ajustar el color del tema en el campo de salida
 */
function ajustarColor() {
	if (document.body.classList.contains('modo-oscuro')) {
		color = '#0e0e12';
		salidaTexto.style.background = `${color} no-repeat center url(./image/notexto1.png)`;
	} else {
		color = '#f1f1f1';
		salidaTexto.style.background = `${color} no-repeat center url(./image/notexto1.png)`;
	}
}
//#endregion Ajustar color

//#region copiar
/**
 * Description funcion para copiar el dato en el campo de salida en el portapapeles del dispositivo y reinia la aplicaion
 */
function copiar() {
	var copia = salidaTexto.value;
	navigator.clipboard.writeText(copia);

	var anuncio = document.querySelector('.texto-anuncio');
	anuncio.textContent = 'Texto copiado';
	anuncio.style.display = 'block';
	setTimeout(() => {
		anuncio.style.display = 'none';
		salidaTexto.value = '';
		mostrar();
	}, 950);
}
//#endregion copiar

//#region adicional para alterñar modos calro y oscuro
/**
 * Description funcion para cambiar el color de tema de la aplicaion haciendo click en el logo
 */
function cambioTema() {
	const themeToggleButton = document.getElementById('alternar-tema');

	// Cargar el estado del tema desde localStorage
	if (localStorage.getItem('modo-oscuro') === 'enabled') {
		document.body.classList.add('modo-oscuro');
	}

	themeToggleButton.addEventListener('click', () => {
		document.body.classList.toggle('modo-oscuro');
		//document.body.classList.remove('modo-claro');
		// document.body.classList.add('modo-oscuro');
		// Guardar el estado del tema en localStorage
		ajustarColor();
		if (document.body.classList.contains('modo-oscuro')) {
			localStorage.setItem('modo-oscuro', 'enabled');
			logo.src = './image/logo-alura-whi.png';
			// document.body.classList.remove('modo-claro');
			// document.body.classList.add('modo-oscuro');
			// inicio();
		} else {
			localStorage.setItem('modo-oscuro', 'disabled');
			logo.src = './image/logo-alura-blu.png';
			// document.body.classList.remove('modo-oscuro');
			// document.body.classList.add('modo-claro');
			// inicio();
		}
		//document.body.classList.remove('modo-oscuro');
		ajustarImagen();
	});
}
//#endregion adicional para alterñar modos calro y oscuro

//#region mensaje
/**
 * Description muestra un modal estilo cuadro de mensaje
 *
 * @param {*} mensaje
 */
function mensaje(mensaje) {
	var titulo = 'Mensaje';
	// Seleccionamos los elementos necesarios
	//const openModal = document.getElementById('open-modal');
	const closeModal = document.getElementById('close-modal');
	const modal = document.getElementById('modal');

	document.getElementById('modal-header').innerHTML = titulo;
	document.getElementById('content').innerHTML = mensaje;

	modal.classList.add('show');
	// Función para abrir el modal
	// openModal.addEventListener('click', () => {
	// 	modal.classList.add('show');
	// });

	// Función para cerrar el modal
	document.getElementById('aceptar').addEventListener('click', () => {
		modal.classList.remove('show');
	});

	// Función para cerrar el modal
	closeModal.addEventListener('click', () => {
		modal.classList.remove('show');
	});
}
//#endregion mensaje

//#region carga la propiedes iniciales al proyecto
inicio();
//#endregion


