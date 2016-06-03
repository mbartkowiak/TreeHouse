//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


//add overlay
$("body").append($overlay)
//an image
$overlay.append($image);
//a caption
$overlay.append($caption);


//1.  capture the click event on a link to an image
//  1.2  update overlay with the image linked in the link
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
 
  //  1.1  show the overlay
  $overlay.show();

//get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
  
});


//3. when overlay is clicked
//  3.1 hide the overlay
$overlay.click(function(){
   $overlay.hide();  
});
