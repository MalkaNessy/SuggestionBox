app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts:[
			{
				title: 'Free pizza at club meetings',
				upvotes: 15,
				comments: ['comment 1-1', 'comment 1-2'],
			},
			{
				title: 'End all club emails with Laffy Taffy jokes',
				upvotes: 9,
				comments: [],
			},
			{
				title: 'Retrofit water fountain with Gatorade',
				upvotes: 7,
				comments: ['comment 3-1', 'comment 3-2'],
			},
			{
				title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
				upvotes: 3,
				comments: ['comment 4-1', 'comment 4-2'],
			},
		]
	};
	return demoSuggestions;
}]);