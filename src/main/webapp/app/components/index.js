module.exports = function(angular){
    
    var helloWorld = require('./hello-world')(angular);
    
    return {
        helloWorld : helloWorld
    }
}