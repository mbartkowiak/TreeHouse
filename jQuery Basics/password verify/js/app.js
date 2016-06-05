//hints are shown even when form is valid
//hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//hide hints
$("form span").hide();


//find out if password is valid
function passwordEvent(){
  if($password.val().length > 8){
    //hide hint if password is valid
    $password.next().hide();
  }else{
    //else show hint
    $password.next().show();
  }


};

function confirmPasswordEvent(){
  //find out if password and confirmation match
  if ($password.val()===$confirmPassword.val()){
    $confirmPassword.next().hide();
  }else{
      $confirmPassword.next().show();

  }  

}


//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

//when event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);





