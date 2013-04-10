function Controller($scope) {
$scope.doshow=false;
  $scope.master= {};
 
  $scope.update = function(user) {
    $scope.master= angular.copy(user);
  };
 
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
 
  $scope.reset();
  
  $scope.checkshow=function(){
  if($scope.doshow){$scope.doshow=false;
  }else{$scope.doshow=true;	}
  
  }
}