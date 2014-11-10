define([
	'sdk',
	'utils',
	'./base',
	'templates/articlesserious.html',
	'styles/articlesserious'
], function(
	SDK,
	Utils,
	BaseArticles,
	Template
){

	Utils.inherit(BaseArticles, ArticlesSerious);

	function ArticlesSerious(config){
		
		BaseArticles.call(this, config);
		this.template = Template;
	}

	ArticlesSerious.prototype.update = function(){
		/*
		Esto de sobreescribir este metodo no deberia ser necesario
		Lo que habria que hacer es hacer la clase BaseArticles, mas
		flexible, para que acepte mas opciones y asi sirva para 
		ultimos articulos, u otras clases de collecciones de articulos
		*/

		SDK.getArticles(SDK.getCurrentSectionId(), function(articles){

			this.model = {
				articles: articles,
				twitter: SDK.getTwitter()
			};

			this.render();
		}, this);

	}

	return ArticlesSerious;
});
