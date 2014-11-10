define([
	'utils',
	'./base',
	'templates/menu.html',
	'styles/simplemenu2'
], function(
	Utils,
	BaseMenu,
	Template
){
	
	Utils.inherit(BaseMenu, SimpleMenu2);

	function SimpleMenu2(config){

		BaseMenu.call(this, config);
		this.template = Template;
	}

	return SimpleMenu2;
});
