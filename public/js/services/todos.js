angular.module('todoService', [])
	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
        var socket = io.connect();
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			},
			deleteat : function() {
				return $http.post('/api/todos/deleteall');
			},
			on : function(eventName, callback) {
			    return socket.on(eventName, callback); 
               /* socket.on(eventName, function () {  
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });*/
            },
            emit : function(eventName, todoData, callback){
                return socket.emit(eventName, todoData, callback);
               /* socket.emit(eventName, todoData, function (){
                  var args = arguments;
                    $scope.apply(function () {
                        if (callback) callback.apply(socket,args);
                    });
                });*/
            }
		}
	}]);
