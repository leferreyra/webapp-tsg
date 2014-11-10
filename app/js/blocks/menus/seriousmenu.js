define([
	'utils',
	'./base',
	'templates/menu.html',
	'styles/seriousmenu'
], function(
	Utils,
	BaseMenu,
	Template
){
	
	Utils.inherit(BaseMenu, SeriousMenu);

	function SeriousMenu(config){

		BaseMenu.call(this, config);
		this.template = Template;
	}

	return SeriousMenu;
});
