module.exports = function(ngModule){
    describe('The Action Button With Confirmation Directive', function () {
        var $scope, 
        	$compile, 
        	EMPTY_TEMPLATE = '<hello-world username="username"/>', 
        	ctrl = 'vm', 
        	directive;

        beforeEach(window.module(ngModule.name));

        beforeEach(inject(function (_$rootScope_, _$compile_) {
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
        }));

        describe('when loaded', function () {

            beforeEach(function () {
            	var username = 'Somebody';
                directive = compileTemplate(username);
                getController(directive);
            });

            it('has expected classes', function(){
                var h2El = directive.find('h2');
                expect(h2El).to.have.class('text-center');
                expect(angular.element(h2El).text()).to.contain('Hello, Somebody');

                var greeting = directive.find('.greeting');
                expect(greeting).to.have.length.of(1);

            });
        });

        function getController(element){
            return element.isolateScope()[ctrl];
        }

        function compileTemplate(username) {
            $scope.username = username;
            var element = $compile(EMPTY_TEMPLATE)($scope);
            $scope.$digest();
            return element;
        }
    });
}