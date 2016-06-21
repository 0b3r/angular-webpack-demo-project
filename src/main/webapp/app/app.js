'use strict';

module.exports = function(ngModule){
	ngModule
		.controller('AppController', [AppController])

	function AppController(){
		var vm = this;
		vm.username = 'Me';
	}
}