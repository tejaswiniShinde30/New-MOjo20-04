(function() {

    'use strict';

    angular.module('omniseq')
        .controller('AdvanceController', AdvanceControllerFunction);
    
    AdvanceControllerFunction.$inject = ['$scope', '$state','$stateParams','UserResource','fileReader'];

    function AdvanceControllerFunction($scope, $state,$stateParams,UserResource,fileReader) {
        var self = this;
         var basicInfo = {'title':$stateParams.title,
                         'desc':$stateParams.desc
                        };
        if(UserResource.backUnabled){
        self.imageSrc = $stateParams.img;
            debugger
        }
        //to go to next tab
        self.gotoNextTab = function(){
            $state.go("App.MyInitiative.AddNewInitiative.Preview",{'title':basicInfo.title ,'desc':basicInfo.desc,'img':basicInfo.img});
        }
        // To go to previous tab
        self.gotoPreviousTab = function(){
            UserResource.backUnabled = true;
            $state.go("App.MyInitiative.AddNewInitiative.Basic",{'title':basicInfo.title ,'desc':basicInfo.desc,'img':basicInfo.img});
        }
        
        
        
        
        
        //for image operation
        $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
           .then(function(result) {
                self.imageSrc = result;
            if($stateParams.img){
            basicInfo.img = $stateParams.img;
                debugger
            }
            else{
                 basicInfo.img = self.imageSrc;
                debugger
            }
               
                debugger
            });
    };
        
        
        
        
        
        
       /*$scope.$watch('file', function(newfile, oldfile) {
      if(angular.equals(newfile, oldfile) ){
        return;
      }

      uploadService.upload(newfile).then(function(res){
        // DO SOMETHING WITH THE RESULT!
        console.log("result", res);
      })
    });*/
    }
    
    
    
    
    angular.module('omniseq').directive("ngFileSelect",function(){

  return {
    link: function($scope,el){
      
      el.bind("change", function(e){
      
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })
      
    }
    
  }
  
  
})
    
   /* angular.module('omniseq').service("uploadService", function($http, $q) {

    return ({
      upload: upload
    });

    function upload(file) {
      var upl = $http({
        method: 'POST',
        url: 'D:\MOJO\Extracted\MOJO\app\images', // /api/upload
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          upload: file
        },
        transformRequest: function(data, headersGetter) {
          var formData = new FormData();
          angular.forEach(data, function(value, key) {
            formData.append(key, value);
          });

          var headers = headersGetter();
          delete headers['Content-Type'];

          return formData;
        }
      });
      return upl.then(handleSuccess, handleError);

    } // End upload function

    // ---
    // PRIVATE METHODS.
    // ---
  
    function handleError(response, data) {
      if (!angular.isObject(response.data) ||!response.data.message) {
        return ($q.reject("An unknown error occurred."));
      }

      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response);
    }

  })*/
    
      /*angular.module('omniseq').directive("fileinput", ['$rootScope',function($rootScope) {
    return {
      scope: {
        fileinput: "=",
        filepreview: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          scope.fileinput = changeEvent.target.files[0];
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.filepreview = loadEvent.target.result;
            });
          }
          reader.readAsDataURL(scope.fileinput);
              $rootScope.photo = scope.fileinput;
            console.log(" $rootScope.photo"+ $rootScope.photo);
            console.log("scope.fileinput:"+JSON.stringify(scope.fileinput));
        });
      }
    }
  }]);*/


    
    
    
    
    
    
    
    
    
}());

  