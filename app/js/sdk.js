define([
	'jquery',
	'app'
], function(
	$,
	App
){

	var config = App.getConfig();

	var SDK = function(){

		var cache = {};
		var queue = {};

		// TODO: Arreglar problema de concurrencia
		function getResource(resource, callback, context){

			var ctxt = context || window;
			
			if(cache[resource]){
				callback.call(ctxt, cache[resource]);
			}else if (resource in queue){
				queue[resource].push({
					fn: callback,
					ctx: ctxt
				});
			}else{

				// Crear una lista de espera para este recurso
				queue[resource] = [];

				$.getJSON(resource, function(data){

					cache[resource] = data;
					callback.call(ctxt, data);

					// Llamar a todas las funciones en lista de espera
					$.each(queue[resource], function(i, q){
						q.fn.call(q.ctx, data);
					});

					// Eliminar del queue
					delete queue[resource];
				});
			}
		}

		return {

			getSections: function(callback, context){
				getResource('/api/secciones', callback, context);
			},
			
			getArticles: function(sectionId, callback, context){
				getResource('/api/secciones/'+ sectionId +'/articulos', callback, context);
			},

			getArticle: function(articleId, callback, context){
				getResource('/api/articulos/'+ articleId, callback, context);
			},

			getRelatedArticles: function(articleId, callback, context){
				getResource('/api/articulos/'+ articleId +'/relacionados', callback, context);
			},

			getLastArticles: function(limit, callback, context){
				getResource('api/articulos/?limit='+limit, callback, context);
			},

			getCurrentSectionId: function(){

				if (App.getCurrentPage() === App.SECTION){
					return App.getCurrentId();
				}else{
					return null;
				}
			},

			getName: function(){
				return config.name;
			},

			getTitle: function(){
				return config.title;
			},

			getDescription: function(){
				return config.description;
			},

			getPhone: function(){
				return config.phone;
			},

			getPosition: function(){
				return config.position;
			},

			getAddress: function(){
				return config.address;
			},

			getEmail: function(){
				return config.social.correo;
			},

			getFacebook: function(){
				return config.social.facebook;
			},

			getTwitter: function(){
				return config.social.twitter;
			}
		}
	}

	return new SDK();

});
