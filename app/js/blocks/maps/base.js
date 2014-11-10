define([
	'jquery',
	'mustache',
	'sdk',
	'utils',
	'blocks/block',
    'async!http://maps.googleapis.com/maps/api/js?v=3'
], function(
	$,
	Mustache,
	SDK,
	Utils,
	Block
){

	Utils.inherit(Block, BaseMap);

	function BaseMap(config){

        // Opciones por default para el bloque
        // Coordenadas del centro de Resistencia por default
        var defaults = {
            lat: -27.4515936,
            long: -58.9867979,
            zoom: 16
        }
        var opt = $.extend(defaults, config.options);

        // Creando objeto de optiones para GMaps
        this.mapOptions = {
            center: new google.maps.LatLng(opt.lat, opt.long),
            zoom: opt.zoom,
            scrollwheel: false
        };

		Block.call(this, config);

        // Inicializar Google Maps
        this.gmap = new google.maps.Map(this.$el.get(0), this.mapOptions);

        this._addCenterMarker();
	}

    // Adds a GMaps marker in the center of the map
    BaseMap.prototype._addCenterMarker = function(){

        return new google.maps.Marker({
            position: this.mapOptions.center,
            map: this.gmap
        });
    }

    BaseMap.prototype.render = function(){

        // Evitar el comportamiento por default. El cual llena el elemento
        // con el template renderizado.
        Utils.after(this._resizeMap, this);

        return this;
    }

    BaseMap.prototype._resizeMap = function(){

        google.maps.event.trigger(this.gmap, "resize");
    }

	return BaseMap;

});
