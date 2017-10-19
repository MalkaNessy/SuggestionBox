console.log('SuggestionController start');
app.controller('SuggestionController',  ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) { 
	
	$scope.post = $scope.posts[$routeParams.id];
	console.log("$scope.post = " + $scope.post );
	$scope.postcomments = $scope.post.comments;
	console.log("$scope.postcomments = " + $scope.postcomments );
	
	//$scope.comcount = $scope.postcomments.length;
	//console.log("$scope.comcount = " + $scope.comcount);
	
	$scope.addComment = function() {
		//if input empty, don't submit
		if(!$scope.comtitle || $scope.comtitle === "") {
			return;
		}

		//push suggestion posts in suggestions.js
		$scope.postcomments.push({
			body: $scope.comtitle,
			upvotes: 0,
		});
		//$scope.comcount += 1;
		//console.log("$scope.comcount after = " + $scope.comcount);
		
		//after submit, clear input
		$scope.comtitle = '';
		 
		console.log("$scope.postcomments == " + $scope.postcomments);
	};
	
	
	$scope.upComVote = function(onecomment) { 
		onecomment.upvotes += 1;
    };
	
	
} 
                               
]);

// $scope.currentBookIndex = parseInt($routeParams.bookId);