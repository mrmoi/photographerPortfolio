/**
 * Created by miniMoimartz on 12/1/16.
 */
myApp.controller('dbController',['$scope','$rootScope','$firebaseAuth','$firebaseArray','FIREBASE_DB_URL','$location', '$state', 'Lightbox',
    function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_DB_URL, $location, $state, $Lightbox) {


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
                image_desc: $scope.image_descField,
                date: Firebase.ServerValue.TIMESTAMP
            }).then(function () {
                $scope.image_nameField='';
                $scope.image_descField='';
                $scope.image_urlField='';
            });
        };




        var imageListRef = new Firebase(FIREBASE_DB_URL + '/images/image_url');
        var imageListInfo = $firebaseArray(imageListRef);
        $scope.imagesList = imageListInfo;

        $scope.listImages = function () {

            imageListURL: $scope.image_urlField;
        };

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.imageList, index);
        };





        /////////////////////////////////////////////////////////

        var likesRef = new Firebase(FIREBASE_DB_URL + '/likes');
        var likesInfo = $firebaseArray(likesRef);
        $scope.likes = likesInfo;

        $scope.addLikes = function (count) {
            console.log('Start to add 1');

            likesInfo.$add({
                image_likes: $scope.likes_Field
            }).then(function (count) {
                $scope.likes_Field += count;
            })

            console.log('Finish adding 1');
        };



/*        var likesRef =  new Firebase(FIREBASE_DB_URL + '/likes');
         var likesInfo = $firebaseArray(likesRef);
         $scope.likes = likesInfo;

        $scope.addlikes = function () {

            console.log('I like this!!');
            /*post.likes += 1;
            $scope.posts.$save(post);

        };

/*        likesInfo.$add({
            likes_incre: $scope.likes_increment
        }).then(function () {
            $scope.likes_increment=count + 1;
        })*/


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


    $scope.load = function () {

     console.log('Im inside a controller..');

    };

    $scope.load();

    }]); // END Controller



