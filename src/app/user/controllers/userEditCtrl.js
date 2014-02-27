
define(['angular', './module'], function (ng, module) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.controller( 'UserEditCtrl', function UserEditController( $scope, $http, $location, $stateParams, storage, LocalStorageNotificationSrv ) {
        console.log("UserEditCtrl init....");

        $scope.user = {name: '', id:'', birthDate: null, children:''};
        $scope.alerts = [];
        $scope.userList = [];

        $scope.init = function(){
            console.log("init function .....");
            this.loadUserList();
            if(!_.isUndefined($stateParams.userId) ){
                this.loadEditMode();
                return;
            }
            this.loadCreateMode();
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
            var tmpId = $stateParams.userId;
            var tmpUser = _.find($scope.userList, function(argUser) {
                return argUser.id === tmpId;
            });
            if(_.isUndefined(tmpUser)){
                return;
            }
            $scope.user = tmpUser;
        };

        $scope.saveUser = function(argUser){
            console.log("Saving ....");
            if(!_.isUndefined($stateParams.userId) ){
                this.editUser(argUser);
                return;
            }
            this.createUser(argUser);
        };

        $scope.editUser = function(argUser){
            var tmpId = $stateParams.userId;
            var tmpIndex = _.findIndex($scope.userList, function(argUser) {
                return argUser.id === tmpId;
            });
            $scope.userList.splice(tmpIndex, 1);
            $scope.userList.push(argUser);
            storage.set("userList", this.userList);
            var tmpNotification = { type: 'success', msg: 'Well done! The user has been saved' };
            LocalStorageNotificationSrv.setSuccessNotification(tmpNotification);
        };

        $scope.createUser = function(argUser){
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
