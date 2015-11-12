app.controller("tatumController", function($scope, myFactory, $timeout, $http) {
    // $scope.movie = {};
    $scope.edit = false;
    getMovies = function(url) {
      myFactory.getAll(url)
        .then(function(response) {
          $scope.movies = response.data;
        });
    };
    getMovies('api/tatums');

// functions
  $scope.postMovie = function() {
    var payload = {
      movies: $scope.movieName,
      year: $scope.year,
      chickFlick: $scope.chickFlick
    };
    myFactory.post('/api/tatums', payload)
      .then(function(response) {
        $scope.movies.push(response.data);
        // $scope.movie = {};
      });
  };

  $scope.deleteMovie = function(){
    myFactory.delete('/api/tatum/' + id)
      .then(function(response){
        getMovies('/api/tatums');
      });
  }

  $scope.editMovie = function(id) {
    var payload = $scope.movieEdit;
    myFactory.put('/api/tatum/' + id, payload)
      .then(function(response) {
        $scope.moviesEdit.movies = '';
        $scope.moviesEdit.year = ' ';
        $scope.moviesEdit.chickFlick = '';
        $scope.edit = false;
        getMovies('/api/tatums');
      });
  };

  $scope.getMovie = function(id) {
    myFactory.getSingle('/api/tatum/' + id)
      .then(function(response) {
        $scope.movieEdit = response.data;
      });
    $scope.edit = true;
  };
});




  /////////////////////////////////////////////////////////
  //   ALL OF THIS CODE CAME FROM KEITH AND THE DUCKS    //
  ////////////////////////////////////////////////////////

//   app.controller('BeerController', function($scope, httpFactory, $timeout, $http) {
//   $scope.success = false;
//   $scope.message = '';
//   $scope.beer = {};
//   $scope.edit = false;
//   getBeers = function(url) {
//     httpFactory.getAll(url)
//     .then(function(response) {
//       $scope.beers = response.data;
//   });
// };
// getBeers('api/v1/beers');
// function messageTimeout() {
//   $scope.success = false;
// }
//   $scope.postBeer = function() {
//     var payload = $scope.beer;
//     httpFactory.post('/api/v1/beers', payload)
//     .then(function(response){
//       $scope.beers.push(response.data);
//       $scope.beer = {};
//       $scope.success = true;
//       $scope.message = "Added a new beer! Woohoo!";
//       $timeout(messageTimeout, 5000);
//     });
//   };
//   $scope.deleteBeer = function(id) {
//         httpFactory.delete('/api/v1/beer/' + id)
//         .then(function(response) {
//           console.log(response.data);
//           $scope.success = true;
//           $scope.message = "Deleted beer! Woohoo!";
//           $timeout(messageTimeout, 5000);
//           getBeers('api/v1/beers');
//         });
//       };
//   $scope.getBeer = function(id) {
//     httpFactory.getSingle('/api/v1/beer/' + id)
//     .then(function(response) {
//       console.log(response.data);
//       $scope.beerEdit = response.data;
//       });
//     $scope.edit = true;
//     console.log($scope.edit);
//   };
//   $scope.editBeer = function(id) {
//     console.log('test');
//     var payload = $scope.beerEdit;
//     httpFactory.put('/api/v1/beer/' + id , payload)
//       .then(function(response) {
//         $scope.beerEdit.name = '';
//         $scope.beerEdit.type = '';
//         $scope.beerEdit.abv = '';
//         $scope.edit = false;
//         $scope.success = true;
//         $scope.message = "Edited beer! Woohoo!";
//         $timeout(messageTimeout, 5000);
//         getBeers('api/v1/beers');
//     });
//   };
// });
