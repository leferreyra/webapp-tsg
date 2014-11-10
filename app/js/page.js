define(['require'], function(require){

	var Page = function(options){

		this.config = options.config;
		this.blocks = createBlocks(this.config, 
			$.proxy(this._onBlocksLoaded, this));

		this.$el = $('<div>');
		this.$el.addClass('page');

		this.updateWhenReady = false;
	}


	Page.prototype.render = function(){
		
		this.$el.empty();

		$.each(this.blocks, function(idx, block){
			this.$el.append(block.render().$el);
		}.bind(this));

		return this;
	}


	Page.prototype.update = function(){

		if (this.blocks.length === 0){
			this.updateWhenReady = true;
		}

		$.each(this.blocks, function(idx, block){
			block.update();
		}.bind(this));
	}


	Page.prototype._onBlocksLoaded = function(){

		this.render();

		if(this.updateWhenReady){
			this.update();
		}
	}


	function createBlocks(blockConfig, callback){

		var blocks = [];
		var blockPaths = [];

		$.each(blockConfig, function(idx, block){
			blockPaths.push('blocks/' + block.blockName);
		});

		require(blockPaths, function(){

			$.each(arguments, function(idx, Block){
				
				blocks.push(new Block(blockConfig[idx]));
			});

			callback();
		});

		return blocks;
	}

	return Page;
});


