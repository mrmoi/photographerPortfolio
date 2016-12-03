/**
 * Created by miniMoimartz on 12/1/16.
 */
myApp.controller('dbController',['$scope','$rootScope','$firebaseAuth','$firebaseArray','FIREBASE_DB_URL',
    function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_DB_URL) {


        /* NAME FIELD*/
        var nameRef = new Firebase(FIREBASE_DB_URL + '/name');
        var nameInfo = $firebaseArray(nameRef);
        $scope.names = nameInfo;

        /* ABOUT ME CONTENT */
        var bioRef = new Firebase(FIREBASE_DB_URL + '/bio');
        var bioInfo = new $firebaseArray(bioRef);
        var index = bioInfo.$indexFor(bioRef);
        $scope.bios = bioInfo;


        /* NAME FIELD FUNCTION */
        $scope.addName = function() {
            nameInfo.$add({
                name: $scope.nameField,
                date: Firebase.ServerValue.TIMESTAMP
            }).then(function () {
                $scope.nameField = '';
            });
        };

        /* ABOUT ME CONTENT FUNCTION */
        $scope.addBio = function () {
            bioInfo.$add({
                about: $scope.aboutField,
                date: Firebase.ServerValue.TIMESTAMP
            }).then(function() {
                $scope.aboutField='';
            });
        };

/*
        /!* DELETE BIO *!/
        $scope.deleteBio = function() {
            //bioInfo.$remove();

            bioInfo.$remove(index + 1).then(function(ref) {
                // data has been deleted locally and in the database
            }, function(error) {
                console.log("Error:", error);
            });

            console.log("remove");
        };
*/







    }]); // END Controller



