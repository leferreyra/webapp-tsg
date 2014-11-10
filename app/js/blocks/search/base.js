define([
	'jquery',
	'mustache',
	'sdk'
], function(
	$,
	Mustache,
	SDK
){

	var BuscadorBlock = function(template){
		this.template = template;
	}

	BuscadorBlock.prototype.render = function(){

		var $block = $("<div></div>");

		// Compilar template
		var $buscador = $(Mustache.render(this.template, {}));

		// Insertar el html en el html del bloque
		$block.append($buscador);

		// Y devuelve un elemento HTML
		return $block[0];
	}

	return BuscadorBlock;

});