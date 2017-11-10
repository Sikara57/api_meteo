app.controller('map.ctrl',function($scope, mapFactory){
    $scope.rech= {};
    $scope.visibilityMap = false;

    $scope.rechercherMap = function(name)
    {
        $scope.res = mapFactory.get(name);
        $scope.rech = {};
        $scope.visibilityMap = true;
    }

});