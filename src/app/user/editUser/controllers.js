
define(['angular', './module'], function (ng, module) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.controller( 'UserCtrl', function UserController( $scope, $http, $location ) {
        console.log("UserCtrl init....");

        $scope.user = {name: "", id:0};

        $scope.init = function(){
            console.log("init function .....");
            if(this.$id){
                this.loadEditMode();
                return;
            }
            this.loadCreateMode();
        };

        $scope.loadCreateMode= function(){

        };

        $scope.loadEditMode = function(){
            this.loadUser();
        };

        $scope.loadUser = function(){
            console.log("loading user ....");
            $http({
                url: 'http://jsonstub.com/user/1',
                method: 'GET',
                headers: {
                    'JsonStub-User-Key': 'fdc9e8dc-e2db-49ec-be37-b915ad00e98b',
                    'JsonStub-Project-Key': 'd71daa77-1ca3-411a-8d60-a5f5201f932b'
                }
            }).success(function (data, status, headers, config) {
                console.log("user loaded ...");
                $scope.user = data;
            });
        };

        $scope.saveUser = function(argUser){
            console.log("Saving ....");
            $http({
                url: 'http://jsonstub.com/user',
                method: 'POST',
                //data:
                headers: {
                    'JsonStub-User-Key': 'fdc9e8dc-e2db-49ec-be37-b915ad00e98b',
                    'JsonStub-Project-Key': 'd71daa77-1ca3-411a-8d60-a5f5201f932b'
                }
            }).success(function (data, status, headers, config) {
                    //do something with data
                    console.log("Success save ....");
                    $location.path("/listUsers");
            });
        };
    });

});
