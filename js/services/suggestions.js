app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts:[
			{
				title: 'Grimm',
				upvotes: 15,
				comments: [{body: "not for children!", upvotes: 3}, 
						   {body: "The best!", upvotes: 1} 
						  ],
			},
			{
				title: 'The big bang theory',
				upvotes: 9,
				comments: [{body: "did you see Live Show Taping?  https://www.youtube.com/watch?v=pEKm54STV2Q", upvotes: 8}, 
						   {body: "They are so amazing", upvotes: 5} 
						  ],
			},
			{
				title: 'Westworld, 2016',
				upvotes: 7,
				comments: [{body: "I like it very much", upvotes: 2},
						   {body: "If you want to see something really unusial", upvotes: 2},
						   {body: "can not understand it", upvotes: 4} 
						  ],
			},
			{
				title: 'Star Trek (old series)',
				upvotes: 3,
				comments: [{body: "oh, really, how can you watch it?..", upvotes: 8}, 
						   {body: "great film", upvotes: 6} 
						  ],
			},
		]
	};
	return demoSuggestions;
}]);