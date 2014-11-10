
requirejs.config({

	baseURL: 'js/',

	map: {
		'blocks': {
			'templates': 'text!../../../templates/blocks',
			'styles': 'libs/require-less/less!/styles/blocks'
		}
	},

	shim: {
		routie: {
			exports: 'routie'
		},
		utils: {
			deps: ['polyfills']
		},
		FB: {
			exports: 'FB'
		}
	},

	paths: {
        async: 'libs/async',
		jquery: 'libs/jquery',
		mustache: 'libs/mustache',
		text: 'libs/text',
		routie: 'libs/routie.min',
		polyfills: 'libs/polyfills',
		FB: '//connect.facebook.net/es_LA/all'
	}
});

require(['jquery', 'app'], function($, App){

	$.getJSON('/api/config/', function(config){

		App.initialize(config, $('#main'));

		var colors = config.colors;

		// Set LESS config
		requirejs.config({
			less: {
				globalVars: {
					primaryColor: colors.primary,
					secondaryColor: colors.secondary,
					backgroundColor: colors.background
				}
			}
		});
	});

});
