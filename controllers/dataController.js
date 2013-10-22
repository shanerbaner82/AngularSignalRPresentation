myApp.controller('SignalRAngularCtrl', function ($scope, signalRSvc, $rootScope){
	//set $scope.text to an empty string
	$scope.text="";
	
	//when button on page is pushed this function is called which calls a function called sendRequest on the signalRSvc service (factory)
	$scope.greetAll = function(){
		signalRSvc.sendRequest();
		
		
		
		}
		
	var time;
	
	var myArray = $rootScope.myArray = [];
	var myPages = $rootScope.myPages = [];
	function page(name,id){
			this.name = name;
			this.id = id; 
			this
		}

	//function called updateUI that when called accepts a parameter and sets that parameter = to $scope.text
	updateUI = function(text){
		$scope.text = text;
		myArray.push({'Message': text, 'Time': time});
	
		
		myNewPage = new page(text,time);
		myPages.push(myNewPage);
		}
	// calls initialize function on our factory, initialize set up all proxy and connections to the hub
	signalRSvc.initialize();	
	
	//sets up a listener for the gotData event, when this listener is triggered it accepts the data as a parameter and send the data up to our updateUI function
	$scope.$parent.$on("gotData", function(e, message){
		$scope.$apply(function(){
			updateUI(message)
			time = new Date();
			
			});
		});
	
	});