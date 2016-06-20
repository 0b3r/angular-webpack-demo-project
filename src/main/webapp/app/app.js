'use strict';

module.exports = function(ngModule){
	ngModule
		.controller('AppController', [AppController])

	function AppController(){
		vm.username = 'Trinity';

	}
}