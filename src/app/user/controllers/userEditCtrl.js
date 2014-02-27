
define(['angular', './module'], function (ng, module) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.controller( 'UserEditCtrl', function UserEditController( $scope, $http, $location, $stateParams, storage, LocalStorageNotificationSrv ) {
        console.log("UserEditCtrl init....");

        $scope.user = {name: "", id:0, birthDate: null};
        $scope.alerts = [];
        $scope.userList = [];

        $scope.init = function(){
            console.log("init function .....");
            if(!_.isUndefined($stateParams.userId) ){
                this.loadEditMode();
                return;
            }
            this.loadCreateMode();
            this.loadUserList();
        };

        $scope.loadUserList = function(){
            var tmpUserList = storage.get("userList");
            if(!_.isUndefined(tmpUserList) && !_.isNull(tmpUserList)){
                $scope.userList = tmpUserList;
            }
        };

        $scope.loadCreateMode= function(){
            $scope.today();
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
            $scope.userList.push(argUser);
            storage.set("userList", this.userList);
            var tmpNotification = { type: 'success', msg: 'Well done! The user has been saved' };
            LocalStorageNotificationSrv.setSuccessNotification(tmpNotification);
        };

        /**
         * START
         * Date picker functions
         * */

        $scope.today = function() {
            $scope.user.birthDate = new Date();
        };

        $scope.showWeeks = true;
        $scope.toggleWeeks = function () {
            $scope.showWeeks = ! $scope.showWeeks;
        };

        $scope.clear = function () {
            $scope.user.birthDate = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
            $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];

        /**
         * END
         * Date picker functions
         * */
    });

});
