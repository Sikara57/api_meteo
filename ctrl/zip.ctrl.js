app.controller('zip.ctrl',function($scope, zipFactory){
    $scope.cp= {};
    $scope.visibilityZip = false;

    $scope.rechercherZip = function(name)
    {
        name.zip=name.zip + ',fr'
        console.log(name)
        $scope.res = zipFactory.get(name);
        $scope.cp = {};
        $scope.visibilityZip = true;
    }

});