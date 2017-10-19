app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts:[
			{
				title: 'Free pizza at club meetings',
				upvotes: 15,
				comments: [{body: "comment 1-1", upvotes: 3}, 
						   {body: "comment 1-2", upvotes: 1} 
						  ],
			},
			{
				title: 'End all club emails with Laffy Taffy jokes',
				upvotes: 9,
				comments: [{body: "comment 2-1", upvotes: 8}, 
						   {body: "comment 2-2", upvotes: 5} 
						  ],
			},
			{
				title: 'Retrofit water fountain with Gatorade',
				upvotes: 7,
				comments: [{body: "comment 3-1", upvotes: 2},
						   {body: "comment 3-2", upvotes: 2},
						   {body: "comment 3-3", upvotes: 4} 
						  ],
			},
			{
				title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
				upvotes: 3,
				comments: [{body: "comment 4-1", upvotes: 8}, 
						   {body: "comment 4-2", upvotes: 6} 
						  ],
			},
		]
	};
	return demoSuggestions;
}]);