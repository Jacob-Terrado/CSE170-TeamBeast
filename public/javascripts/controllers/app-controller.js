/**
* Created by John on 2/6/2016.
*/
app.controller('appCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog',
function($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
  $scope.view = "Dashboard";
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [
    {
      link : "",
      title: "Dashboard",
      icon : "dashboard"
    },
    {
      link : "app.js",
      title: "Visitor's Queue",
      icon : "inbox",
      numVisitors: 3
    },
    {
      link : "",
      title: "Employees",
      icon : "people"
    },
    {
      link : "",
      title: "Form Builder",
      icon : "description"
    },
    {
      link : "",
      title: "Themes",
      icon : "palette"
    },
    {
      link : "",
      title: "Visitor's View",
      icon : "content_paste"
    },
    {
      link : "showListBottomSheet($event)",
      title: "Settings",
      icon : "settings"
    },
    {
      link : "",
      title: "Help",
      icon : "help_outline"
    }
  ];

  $scope.changeView = function(newView) {
    $scope.view = newView;
  };

  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: '/views/list-bottom-sheet.html',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
}]);

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};
