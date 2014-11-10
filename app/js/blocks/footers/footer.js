define([
	'utils',
	'./base',
	'templates/footer.html',
	'styles/footer'
], function(
	Utils,
	BaseFooter,
	Template
){
	
	// Heredar del BaseFooter
	Utils.inherit(BaseFooter, Footer);

	function Footer(config){

		BaseFooter.call(this, config);
		this.template = Template;
	}

	return Footer;
});
