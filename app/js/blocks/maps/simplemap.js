define([
	'jquery',
	'utils',
	'./base',
    'styles/simplemap'
], function(
	$,
	Utils,
	BaseMap
){

	Utils.inherit(BaseMap, SimpleMap);

	function SimpleMap(config){

		BaseMap.call(this, config);
	}

	return SimpleMap;
});
