define([
	'utils',
	'./base',
	'templates/articlesimages.html',
	'styles/lastarticlesimages'
], function(
	Utils,
	BaseArticles,
	Template
){

	// Heredar de Basearticles
	Utils.inherit(BaseArticles, LastArticlesImages);

	function LastArticlesImages(config){

		BaseArticles.call(this, config);

		this.template = Template;
	}

	return LastArticlesImages;
});
