const typed = new Typed('.typed', {
    strings: [
        '<i class="abilidades" id="web">diseñador web</i>', 
        '<i class="abilidades" id="graf">diseñador grafíco</i>',
        '<i class="abilidades" id="apps">diseñador de apps</i>',
        '<i class="abilidades" id="mas">y mucho más!</i>'
    ],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
	startDelay: 250, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 40, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '/', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});


//window.onscroll = function(){
	//if (document.documentElement.scrollTop > 100) {
		//document.querySelector('.go-top-cont')
		//.classList.add('show')
	//}else{
		//document.querySelector('.go-top-cont')
		//.classList.remove('show')
	//}
//}

document.querySelector('.go-top-cont')
.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})


document.querySelector('.go-down-cont')
.addEventListener('click', () => {
	window.scrollTo({
		top: (700),
		behavior: 'smooth'
	})
})