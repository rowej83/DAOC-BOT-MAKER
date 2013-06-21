function selectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) { //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();        
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function Controller($scope) {
$scope.doshow=false;
  $scope.master= {};


  $scope.update = function(user) {
    $scope.master= angular.copy(user);
  };
 
 /** $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  }; **/
  
    $scope.resetform = function() {
     $scope.bot = angular.copy($scope.master);
  };
   $scope.selectall = function() {
   //alert('happened');
		selectText('prer');
  };
 // $scope.reset();

  
  $scope.checkshow=function(){
  if($scope.doshow){$scope.doshow=false;
  }else{$scope.doshow=true;	}
  
  }
}