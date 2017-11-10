app.factory('mapFactory', function($resource){
	return $resource('https://api.openweathermap.org/data/2.5/weather?APPID=:key&units=metric:param',{param:'@q',key:'d558e84492ca8a91515b55660238abf6'},
	{
		update:
		{
			method : 'PUT'
		}
	});
});

