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

	Utils.inherit(Block, BaseFooter);

	function BaseFooter(config){

		Block.call(this, $.extend({
			$el: $('<footer>')
		}, config));
	}

	BaseFooter.prototype.update = function(){

		this.model = {
			titulo: SDK.getName(),
			direccion: SDK.getAddress(),
			telefono: SDK.getPhone(),
			email: SDK.getEmail(),
		};

		this.render();
	}

	return BaseFooter;

});
