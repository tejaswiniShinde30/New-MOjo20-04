(function () {

    'use strict';

    angular.module('omniseq')
        .controller('myInitiativesController', myInitiativesController);

    myInitiativesController.$inject = ['$scope', '$state','MyInititivesResource','API', 'CONFIG'];// add $modal as a dependenacy

    function myInitiativesController($scope, $state, MyInititivesResource, API, CONFIG) {

        var myInitiativesCtrl = this;
        myInitiativesCtrl.displayed = [];
        myInitiativesCtrl.callServer = callServer;
        myInitiativesCtrl.isDeleted = false;


        function callServer(tableState) {
            myInitiativesCtrl.stState = tableState;
            myInitiativesCtrl.isLoading = true;
            myInitiativesCtrl.noRecords = false;
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;

            MyInititivesResource.getPage(start, number, tableState).then(function (result) {
                myInitiativesCtrl.displayed = result.data;
                if (myInitiativesCtrl.displayed.length) {
                    tableState.pagination.numberOfPages = result.numberOfPages;
                    myInitiativesCtrl.isLoading = false;
                } else {
                    myInitiativesCtrl.noRecords = true;
                    myInitiativesCtrl.isLoading = false;
                }
            });
        };
        
        
       myInitiativesCtrl.deleteInitiative  = function(id){
            MyInititivesResource.deleteInitiative(id).then(function (result) {
            });
       
       };
        /*myInitiativesCtrl.openPopup = function(ImageData){
            var modalInstance = $modal.open({
                templateUrl: '/components/users/popup.html',
                controller: 'popUpController',
                resolve:{
                img: function(){
                return ImageData;
            }
            }
            });
        
        };*/

    }
    
   /* angular.module('omniseq')
        .controller('popUpController', popUpControllerFunc);

    popUpControllerFunc.$inject = ['$scope','$modalInstance','img'];
    
    function popUpControllerFunc($scope, $modalInstance, img) {
        var popUpController = this;
        popUpController.img = img;
        $scope.ok = function () {
        $modalInstance.dismiss('cancel');
        };
    };*/
    
    
    
    
}());
