define([
	'jquery',
	'mustache',
	'sdk',
	'utils',
	'blocks/block',
	'facebook'
], function(
	$,
	Mustache,
	SDK,
	Utils,
	Block,
	Facebook
){

	// Heredar de Block
	Utils.inherit(Block, BaseArticles);

	function BaseArticles(config){

		Block.call(this, config);

		// Agregar atributo que guarde la cantidad de articulos
		this.limit = $.extend(this.config.options || {}, {
			limit: 5
		}).limit;
	}

	/*
	Sobrescribir el metodo render para agregar el parseo de los
	likes de Facebook
	*/
	BaseArticles.prototype.render = function(){
		
		Block.prototype.render.call(this);
		Facebook.XFBML.parse(this.$el.get(0));

		return this;
	}


	BaseArticles.prototype.update = function(){

		// Obtener los datos del server interactuando con el SDK
		SDK.getLastArticles(this.limit, function(articles){

			this.model = {
				articles: articles,
				twitter: SDK.getTwitter()
			};

			this.render();
		}, this);
	}

	return BaseArticles;

});
