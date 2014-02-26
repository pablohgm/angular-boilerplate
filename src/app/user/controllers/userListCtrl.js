define(['angular', './module'], function (ng, module) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.controller( 'UserListCtrl', function UserListController( $scope, $http, storage ) {
        console.log("ListCtrl init....");

        $scope.init = function(){
            this.loadUsers();
        };

//        $scope.loadUsers = function(){
//            $http({
//                url: 'http://jsonstub.com/users',
//                method: 'GET',
//                headers: {
//                    'JsonStub-User-Key': 'fdc9e8dc-e2db-49ec-be37-b915ad00e98b',
//                    'JsonStub-Project-Key': 'd71daa77-1ca3-411a-8d60-a5f5201f932b'
//                }
//            }).success(function (data, status, headers, config) {
//                    //do something with data
//                    console.log("Success GET ListCtrl");
//                    $scope.users = data.users;
//                }).error(function (data, status, headers, config) {
//                    console.log("Error GET ListCtrl");
//                });
//        };

        $scope.loadUsers = function(){
            var tmpUserList = storage.get("userList");
            if(!_.isUndefined(tmpUserList)){
                $scope.users = tmpUserList;
            }
        };

        $scope.showSaveUserSuccessAlert= function(){
            console.log("SAVE USER SUCCESS ...");
        };
    });

});