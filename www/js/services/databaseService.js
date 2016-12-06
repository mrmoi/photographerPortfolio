/**
 * Created by miniMoimartz on 12/1/16.
 */
myApp.controller('dbController',['$scope','$rootScope','$firebaseAuth','$firebaseArray','FIREBASE_DB_URL','$location', '$state',
    function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_DB_URL, $location, $state) {


        /////////////////////////////////////////////////////////
        /* IMAGES CONTENT */
        /*
         - Images will have their own table:
         - IMAGES_TABLE
            IMAGE_URL
            IMAGE_NAME
            IMAGE_LIKES
        */
        var imageRef = new Firebase(FIREBASE_DB_URL + '/images');
        var imageInfo = $firebaseArray(imageRef);
        $scope.images = imageInfo;

        $scope.addImage = function () {
            imageInfo.$add({
                image_name: $scope.image_nameField,
                image_url: $scope.image_urlField,
                //image_likes: $scope.image_likesField,
                date: Firebase.ServerValue.TIMESTAMP
            }).then(function () {
                $scope.image_nameField='';
                $scope.image_urlField='';
                //$scope.image_likesField='';
            });
        };
        /////////////////////////////////////////////////////////

        /////////////////////////////////////////////////////////
        /* BIO CONTENT */
        var bioRef = new Firebase(FIREBASE_DB_URL + '/bio');
        var bioInfo = new $firebaseArray(bioRef);
        var index = bioInfo.$indexFor(bioRef);
        $scope.bios = bioInfo;

        /* BIO FUNCTION */
        /*
        BIO_TABLE
            BIO_NAME
            BIO_ABOUT
            BIO_IMAGE_URL
        */
        $scope.addBio = function () {
            bioInfo.$add({
                name: $scope.nameField,
                about: $scope.aboutField,
                image_url: $scope.imageField,
                date: Firebase.ServerValue.TIMESTAMP
            }).then(function() {
                $scope.nameField='';
                $scope.aboutField='';
                $scope.imageField='';
            });
        };
        /////////////////////////////////////////////////////////

        //$scope.myUrl = $location.path();

        $scope.uiRouterState = $state;









        /////////////////////////////////////////////////////////

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

        /*     NAME FIELD
        var nameRef = new Firebase(FIREBASE_DB_URL + '/name');
        var nameInfo = $firebaseArray(nameRef);
        $scope.names = nameInfo;

        /* NAME FIELD FUNCTION
        $scope.addName = function() {
            nameInfo.$add({
                name: $scope.nameField,
                date: Firebase.ServerValue.TIMESTAMP
            }).then(function () {
                $scope.nameField = '';
            });
        };


         */







    }]); // END Controller



