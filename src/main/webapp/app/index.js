'use strict';

// vendor styles
require('angular-material/angular-material.css');
require('bootstrap/dist/css/bootstrap.css');
require('animate.css/animate.css');

// vendor scripts
var angular = require('angular');

var uiRouter = 'ui.router';
var ngMaterial = 'ngMaterial';
var ngMessages = 'ngMessages';

if(ON_TEST){
	require('./vendor');
}

// app scripts
var components = require('./components')(angular);

var appModule = angular.module('app', [
    uiRouter,
    ngMaterial,
    ngMessages,
    components.helloWorld
    ])

require('./app')(appModule);