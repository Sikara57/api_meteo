app.controller('city.ctrl',function($scope, cityFactory){
    $scope.city= {};
    $scope.visibilityCity = false;

    $scope.rechercher = function(name)
    {
        $scope.res = cityFactory.get(name);
        $scope.city = {};
        $scope.visibilityCity = true;
    }

});