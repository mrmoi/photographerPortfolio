/**
 * Created by miniMoimartz on 12/1/16.
 */

var myApp = angular.module('myApp', ['ui.router', 'firebase'])
    .constant('FIREBASE_DB_URL', 'https://germanproductions.firebaseio.com/');


myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');

    var states = [

        {
            name: 'home',
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'dbController'
        },

        {
            name: 'control',
            url: '/control',
            templateUrl: 'partials/control.html',
            controller: 'dbController'
        }
    ]

    states.forEach(function (state) {
        $stateProvider.state(state);
    });


});



