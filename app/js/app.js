define([
	'jquery',
	'routie',
	'page'
], function(
	$,
	routie,
	Page
){

	var App = function(){

		this.HOME = 0;
		this.SECTION = 1;
		this.ARTICLE = 2;
	}

	App.prototype.initialize = function(config, $el){

		this.$el = $el;
		this.config = config;

		this.pagesConfig = loadBlocksConfig(config.blocks);
		this.pages = createPages(this.pagesConfig);

		this.currentPage = 0;
		this.currentId = 0;

		this.router = routie({
			'/': $.proxy(this.render, this, this.HOME),
			'/seccion/:id': $.proxy(this.render, this, this.SECTION),
			'/articulo/:id': $.proxy(this.render, this, this.ARTICLE),
			'*': function(){ routie('/') }
		});	
	}


	App.prototype.render = function(page, id){
		
		var map = {}

		map[this.HOME] = 'home',
		map[this.SECTION] = 'section',
		map[this.ARTICLE] = 'article',

		// Guardar pagina e id actuales
		this.currentPage = page;
		this.currentId = id || null;

		// Actualiza contenido principal
		
		var page = this.pages[map[page]];
		page.update();
		
		this.$el.html(page.$el);
	}


	App.prototype.getConfig = function(){
		return this.config;
	}


	App.prototype.getCurrentPage = function(){

		return this.currentPage;
	}


	App.prototype.getCurrentId = function(){
	
		return this.currentId;
	}

	/*
	Funciones utilitarias privadas
	==============================
	*/

	function getBlockPath(blockName){

		return "blocks/" + blockName;
	}

	function parseBlock(block){

		return typeof block === "string" ? { blockName: block } : block;
	}

	// En esta funcion se parsean todos los bloques de la config
	// y se cargan sus configuraciones en requirejs
	function loadBlocksConfig(blocksConfig){

		var blocks = {};

		$.each(blocksConfig, function(page, pageBlocks){

			blocks[page] = $.map(blocksConfig[page], parseBlock);
		});

		return blocks;
	}

	function createPages(pagesConfig){

		var pages = {};

		for (page in pagesConfig){

			pages[page] = new Page({
				config: pagesConfig[page]
			});
		}

		return pages;
	}


	return new App;
});
