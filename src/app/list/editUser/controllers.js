
define(['angular', './module'], function (ng, module) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.controller( 'UserEditCtrl', function ListController( $scope, $http ) {
        console.log("UserEditCtrl init....");

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
            });
        };



    });

});
