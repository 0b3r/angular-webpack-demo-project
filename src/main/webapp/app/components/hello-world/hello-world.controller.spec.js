'use strict';

module.exports = function(ngModule){
    describe('The Hello World Controller', function () {
        var $controller, controller;

        beforeEach(window.module(ngModule.name));

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        describe('when created', function () {
            it('has default bindings setup', function () {
            	var bindings = {
	                username: 'Myself'
	            };
            	controller = createController(bindings);
                expect(controller.username).to.be.defined;
                expect(controller.username).to.equal('Myself');
            });

            it('has configured bindings setup', function () {
            	var bindings = {};
            	controller = createController(bindings);
                expect(controller.username).to.be.defined;
                expect(controller.username).to.equal('World');
            });
        });

        function createController(bindings) {
            return $controller('HelloWorldController', {}, bindings);
        }
    });

}