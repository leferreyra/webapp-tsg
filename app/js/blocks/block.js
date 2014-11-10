define([
	'jquery',
	'mustache'
], function(
	$,
	Mustache
){

	function Block(config){

		// Definir algunas opciones por default
		var defaults = {
			blockName: "generic",
			template: "",
			$el: $('<div>'),
			model: {},
            options: {}
		}

		// Mezclar optiones por default y parametros
		this.config = $.extend(defaults, config);

		// Setear nombre a partir del path del bloque en la config
		this.name = getBlockName(this.config.blockName);
		this.template = this.config.template;

		// Asociar elemento al bloque y ponerle una clase con su nombre
		this.$el = this.config.$el;
		this.$el.addClass(this.name);
		this.$el.addClass('block');

		// Crear un objeto vacio de modelo para el bloque
		this.model = {};
	}

	Block.prototype.render = function(){

		/*
		El comportamiento por default sera renderizar el template
		pasandole el objeto de modelo como contexto. Esto cubrira
		la mayoria de los casos de uso. De no ser asi, sobrescribir
		el metodo render()
		*/
		this.$el.html(Mustache.render(this.template, this.model));

		/*
		Llamar al metodo _bindEvents() luego de llamar al render
		*/
		this._bindEvents();

		return this;
	}

	Block.prototype.update = function(){

		/*
		Dentro de este metodo deben realizarse todos las operaciones
		que actualicen los datos para renderizar el bloque.
		Luego llamar al metodo render.
		*/
		
		this.render();
	}

	Block.prototype._bindEvents = function(){
		/*
		El proposito de esta funcion es de ser sobreescrita
		*/
	}

	function getBlockName(name){
		
		// Obtener la ultima parte del path, como nombre del bloque
		return name.indexOf('/') !== -1 ? name.split('/')[name.split('/').length-1] : name;
	}

	return Block;

});
