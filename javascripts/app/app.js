/*global $: false */
var main = function () {
    "use strict";
    $("#user_input").val("keyword"); 
    $("#user_input_button").click(function () {
        var input =  $("#user_input").val();
        $("#result_div p").html(input);
        $("#interface_div").fadeOut(500, function () {
            var twitter = new ctwitter.CTwitter();
            $("#result_div").fadeIn(500);
            console.log("Twitter Feed");
            twitter.stream("statuses/filter", { lang: "en", track: [input] }, function (stream) {
                stream.on("data", function (tweet) {
                    $('<p class= "tweet"> <img src= "' + tweet.profile_image_url + '"/>' + tweet.text + '</p>')                                         
                        .hide().prependTo('#tweets').slideDown(1000); 
                    $('#tweets p:gt(0)').fadeOut(400, function () { 
                        $(this).remove();
                    });
                });
            });
        });
    });
}
$(document).ready(main);