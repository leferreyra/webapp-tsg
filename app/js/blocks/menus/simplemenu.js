define([
	'utils',
	'./base',
	'templates/menu.html',
	'styles/simplemenu'
], function(
	Utils,
	BaseMenu,
	Template
){
	
	Utils.inherit(BaseMenu, SimpleMenu);

	function SimpleMenu(config){

		BaseMenu.call(this, config);
		this.template = Template;
	}

	return SimpleMenu;
});
