app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
// controller code here
	$scope.posts = suggestions.posts;
	console.log("HomeController $scope.posts = " + $scope.posts );
	
		
	$scope.addSuggestion = function() {
		//if input empty, don't submit
		if(!$scope.intitle || $scope.intitle === "") {
			return;
		}

		//push suggestion posts in suggestions.js
		$scope.posts.push({
			title: $scope.intitle,
			upvotes: 0,
		});

		//after submit, clear input
		$scope.intitle = '';
	};
	
	
	$scope.upVote = function(post) { 
		post.upvotes += 1;
    };
	
	
		
	
}]);