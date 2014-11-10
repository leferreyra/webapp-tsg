define([
	'jquery',
	'mustache',
	'sdk',
	'utils',
	'blocks/block'
], function(
	$,
	Mustache,
	SDK,
	Utils,
	Block
){

	Utils.inherit(Block, BaseMenu);

	function BaseMenu(config){

		Block.call(this, config);

	}

	BaseMenu.prototype.update = function(){

		SDK.getSections(function(sections){

			this.model = {
				sections: sections,
				logo: SDK.getName(),
				facebook: SDK.getFacebook(),
				twitter: SDK.getTwitter()
			};

			this.render();
		}, this);
	}

	BaseMenu.prototype._bindEvents = function(){
	
		// Mostrar menu si se hace click en #pull
		var $pull = this.$el.find('#pull'),
			$ul = this.$el.find('ul'),
			menuHeight = $ul.height();

		// Bindear eventos
		$pull.bind('click', function(event){
			event.preventDefault();
			$ul.slideToggle();
		});

	}

	return BaseMenu;

});
