$(document).ready(function () {
  $("#user_input").val("keyword"); 
  $("#user_input_button").click(function () {
   
    $("#result_div p").html($("#user_input").val());
    $("#interface_div").fadeOut(500, function () {
      $("#result_div").css("font-family", "arial").fadeIn(500);
      var input =  $("#user_input").val();
      console.log("Twitter Feed");
      var twitter = new ctwitter.CTwitter();
      twitter.stream("statuses/filter", { lang:"en", track:[input] }, function (stream) {
      stream.on("data", function (tweet) {
        $('<p class="tweet"><img src="'+tweet.profile_image_url+'" />'+tweet.text+'</p>')
		      .hide()
		      .prependTo('#tweets')
		      .slideDown(1000);
          $('#tweets p:gt(0)')
		      .fadeOut(700, function() { $(this).remove() });
      });
    });
    });
  });
  
  




 
 });

