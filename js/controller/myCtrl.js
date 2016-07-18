(function () {
    'use strict';

    angular
        .module('app')
        .controller('myCtrl', myCtrl);

    myCtrl.$inject = ['$http'];

    function myCtrl($http) {
        var vm = this;
        vm.getJson = getJson;
        vm.players = [];

        function getJson() {
            $http({ method: 'GET', url: '/filter/data/players.json' })
         .then(function (response) {
             vm.players = response.data;
         });
        }
        getJson();
    }
})();
