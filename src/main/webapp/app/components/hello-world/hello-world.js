'use strict';

module.exports = function(ngModule){
	
	if(ON_TEST){
		require('./hello-world.controller.spec');
		require('./hello-world.directive.spec');
	}

	ngModule
		.directive('helloWorld', [function () {
            return {
                template: require('./hello-world.tpl.html')
                , restrict: 'E'
                , replace: true
                , scope: {}
                , controller: 'HelloWorldController as vm'
                , bindToController: {
                	username : '=?'
                }
            };
        }])
        .controller('HelloWorldController', [function(){
        	var vm = this;
        	vm.username = vm.username || 'World';
        }])
}