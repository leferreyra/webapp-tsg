define(['jquery'], function($){

	/*
	Funciones utilitarias
	=====================
	*/

	// Heredar
	function inherit(Parent, Child){
		
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
	}

    // Ejecutar codigo despues de renderizado (setImmediate)
    function after(fn, context){

        var ctxt = context || window;
        return setTimeout($.proxy(fn, ctxt), 0);
    }

	return {
		inherit: inherit,
        after: after
	}
});
