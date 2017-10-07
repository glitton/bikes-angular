// Citizen Bikes Angular App
// Wrap in a closure
(function(){
  var foldingBikes = angular.module('foldingBikes', []);

  foldingBikes.controller('bikeController', function ($scope) {
  
    $scope.bikes = [
      {
        brand : 'Tokyo',
        frame : 'Steel',
        speed : '6-Speed',
        weight: '30lbs.',
        price : '199', 
        image : 'img/tokyo.jpg' 
      },
      {
        brand : 'Miami',
        frame : 'Steel',
        speed : '6-Speed',
        weight: '32lbs.',
        price : '299', 
        image : 'img/miami.jpg' 
      },
      {
        brand : 'Milan',
        frame : 'Steel', 
        speed : '1-Speed',
        weight: '33lbs.',
        price : '249', 
        image : 'img/miami.jpg' 
      },      
      {
        brand : 'Seoul',
        frame : 'Alloy',
        speed : '6-Speed',
        weight: '26lbs.',
        price : '329', 
        image : 'img/seoul.jpg' 
      },    
      {
        brand : 'Gotham 7',
        frame : 'Alloy',
        speed : '7-Speed',
        weight: '29lbs.',
        price : '379', 
        image : 'img/gotham_7.jpg' 
      },
      {
        brand : 'Gotham 24-7',
        frame : 'Alloy',
        speed : '7-Speed',
        weight: '30lbs.',
        price : '429', 
        image : 'img/gotham_24-7.jpg' 
      },
      {
        brand : 'Barcelona',
        frame : 'Alloy',
        speed : '3-Speed',
        weight: '31lbs.',
        price : '449', 
        image : 'img/barcelona.jpg' 
      },
      {
        brand : 'Frisco',
        frame : 'Alloy',
        speed : 'e-bike',
        weight: '43lbs.',
        price : '1099', 
        image : 'img/frisco.jpg' 
      }      
    ];  
  });

})(); //end of closure




