define([
	'utils',
	'./base',
	'templates/articlesserious.html',
	'styles/lastarticlesserious'
], function(
	Utils,
	BaseArticles,
	Template
){

	// Heredar de BaseArticles
	Utils.inherit(BaseArticles, LastArticlesSerious);

	function LastArticlesSerious(config){

		BaseArticles.call(this, config);

		// Utilizar un template en particular
		this.template = Template;
	}

	return LastArticlesSerious;
});
