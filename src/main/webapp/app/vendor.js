'use strict';

// vendor styles
require('font-awesome/css/font-awesome.css');
require('angular-material/angular-material.css');
require('bootstrap/dist/css/bootstrap.css');
require('animate.css/animate.css');

if(ON_TEST){
	require('angular-mocks/angular-mocks');
    require('angular-material/angular-material-mocks');
}

// vendor scripts
require('moment/moment');
require('lodash');

var ngMaterial = require('angular-material');
var ngResource = require('angular-resource');
var uiRouter = require('angular-ui-router');
var ngMessages = require('angular-messages');

module.exports = {
	ngMaterial : ngMaterial,
	ngResource : ngResource,
	uiRouter : uiRouter,
	ngMessages : ngMessages
}