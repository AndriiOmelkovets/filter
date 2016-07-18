(function () {
    'use strict';

    angular.module('app', []);

    angular
        .module('app')
        .filter('myFilter',
            function () {
                var newArr;
                var result = 0;
                var count;
                var search = [];
                return function (items, searchPattern) {
                    var fiterPlayers = [];
                    var hist = searchPattern;
                    if (searchPattern) {
                        search = searchPattern.toLowerCase().split(' ');
                        var key;
                        if (search.length === 1) {
                            for (var j = 0; j < items.length; j++) {
                                var item = items[j];
                                for (key in item) {
                                    if (item.hasOwnProperty(key)) {
                                        var find = String(item[key]).toLowerCase();
                                        if (~find.indexOf(search[0])) {
                                            fiterPlayers.push(items[j]);
                                            newArr = fiterPlayers;
                                            break;
                                        }
                                    }
                                }
                            }
                        } else {
                            count = search.length;
                            for (var i = 0; i < newArr.length; i++) {
                                search = hist.toLowerCase().split(' ');
                                var player = newArr[i];
                                for (key in player) {
                                    if (player.hasOwnProperty(key)) {
                                        var secondFind = String(player[key]).toLowerCase();
                                        var itemArr = secondFind.split(' ');
                                        for (var l = 0; l < itemArr.length; l++) {
                                            for (var m = 0; m < search.length; m++) {
                                                if (~itemArr[l].indexOf(search[m])) {
                                                    result++;
                                                    search.splice(search.indexOf(search[m]), 1);
                                                }
                                            }
                                        }
                                    }
                                }
                                if (result != undefined && result === count) {
                                    fiterPlayers.push(player);
                                    result = 0;
                                } else {
                                    result = 0;
                                }
                            }
                        }

                    } else {
                        fiterPlayers = items;
                    }
                    return fiterPlayers;
                }
            });
})();