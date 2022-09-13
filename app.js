// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'attende1', fish: 'SARIN', tastiness: 67 },
    { name: 'finisher', fish: 'RIDHAAN', tastiness: 78 },
    { name: 'runner', fish: 'RIDDHI', tastiness: 80 },
    { name: 'cricketer', fish: 'SARAYULU', tastiness: 83 },
    
  ];
  
});
