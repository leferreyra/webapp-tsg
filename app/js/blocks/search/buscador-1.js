define([
	'blocks/block',
	'views/buscador-1',
	'templates/buscador-1.html',
	'styles/buscador-1'
], function(
	Block,
	BuscadorView,
	Template
){

	// Hereda de Block
	Buscador1.prototype = new Block();
	Buscador1.prototype.constructor = Buscador1;

	/*
	Clase Buscador1
	===============
	*/

	// Constructor
	function Buscador1(){};

	// Sobrescribe metodo render
	Buscador1.prototype.render = function(){

		return new BuscadorView(Template).render();
	}

	return Buscador1;
});