app.controller('TatumController', function($scope, httpFactory, $timeout, $http) {
  $scope.success = false;
  $scope.message = '';
  $scope.tatum = {};
  $scope.edit = false;
  getTatums = function(url) {
    httpFactory.getAll(url)
    .then(function(response) {
      $scope.tatums = response.data;
  });
};
getTatums('api/tatum');
function messageTimeout() {
  $scope.success = false;
}
  $scope.postTatum = function() {
    var payload = $scope.tatum;
    httpFactory.post('/api/tatums', payload)
    .then(function(response){
      $scope.tatums.push(response.data);
      $scope.tatum = {};
      $scope.success = true;
      $scope.message = "Added a new movie! Woohoo!";
      $timeout(messageTimeout, 5000);
    });
  };
  $scope.deleteTatum = function(id) {
        httpFactory.delete('/api/tatum/' + id)
        .then(function(response) {
          console.log(response.data);
          $scope.success = true;
          $scope.message = "Deleted a movie! Woohoo!";
          $timeout(messageTimeout, 5000);
          getTatums('api/tatums');
        });
      };
  $scope.getTatum = function(id) {
    httpFactory.getSingle('/api/tatum/' + id)
    .then(function(response) {
      console.log(response.data);
      $scope.tatumEdit = response.data;
      });
    $scope.edit = true;
    console.log($scope.edit);
  };
  $scope.editTatum = function(id) {
    console.log('test');
    var payload = $scope.tatumEdit;
    httpFactory.put('/api/tatum/' + id , payload)
      .then(function(response) {
        $scope.tatumEdit.movie = '';
        $scope.tatumEdit.year = '';
        $scope.tatumEdit.chickFlick = '';
        $scope.edit = false;
        $scope.success = true;
        $scope.message = "Edited movie! Woohoo!";
        $timeout(messageTimeout, 5000);
        getTatums('api/tatums');
    });
  };
});
