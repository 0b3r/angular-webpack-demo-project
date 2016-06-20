'use strict';

// module style
require('./hello-world.scss');

module.exports = function(angular){
	var ngModuleName = 'components.hello-world',
	var ngModule = angular.module(ngModuleName, [])
	require('./hello-world')(ngModule);
	return ngModuleName;
}