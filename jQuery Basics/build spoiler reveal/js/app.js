//prevent spoilers
//hide spoilers and reveal them through user interaction

//1.  hide spoiler
//2.  add button
//3.  when button pressed
//  3.1 show the spoiler
//  3.2 get rid of the button


$(".spoiler span").hide();
$(".spoiler").append( "<button>Reveal Spoiler!</button>" );
$("button").click(function(){
  $(".spoiler span").show(); 
  $(this).remove();
});
