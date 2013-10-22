myApp.factory('signalRSvc', function($, $rootScope){
	
		//sets initialize function as a variable to be returned
		var initialize = function(){
			
			// Getting the connection object
			 connection = $.hubConnection();
			 
			 //sets the connection URL
			 connection.url = "http://shanechat.thecodingpit.com/signalr/";
			 
			 //Creating proxy
			 this.proxy =  connection.createHubProxy('chat');
			 
			 //Starting Connection
			 connection.start();
			 
			 //publishing an event when server pushes a message
			 this.proxy.on('addMessage', function(data){
				$rootScope.$emit("gotData", data);
			   });
			};
			
		var sendRequest = function(callback){
			//Invoking send method defined in the hub
			this.proxy.invoke('send', "hello");
			
			};
			return{
				initialize: initialize,
				sendRequest: sendRequest
				};
});
       