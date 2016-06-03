//hide warning
//show warning slowly
function myCode(){
	$(".warning").hide().show("slow");
}

$(document).ready(myCode);

/*
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

$("p").hide();
*/