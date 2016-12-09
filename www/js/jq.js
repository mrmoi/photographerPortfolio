/**
 * Created by miniMoimartz on 12/8/16.
 */
$(document).ready(function(e) {

    $("#thumb").hover(function () {
        $(this).toggleClass("animated shake");
        console.log('This is working...');
    });

    $("p").css("background-color", "yellow");

});