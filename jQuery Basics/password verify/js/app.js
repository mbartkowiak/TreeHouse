//hints are shown even when form is valid
//hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//hide hints
$("form span").hide();

function isPasswordValid(){
	return $password.val().length > 8;
}

function arePasswordsMatching(){
	return $password.val() === $confirmPassword.val();
}

function canSubmit(){
	return isPasswordValid() && arePasswordsMatching();
}



//find out if password is valid
function passwordEvent(){
  if(isPasswordValid()){
    //hide hint if password is valid
    $password.next().hide();
  }else{
    //else show hint
    $password.next().show();
  }


};

function confirmPasswordEvent(){
  //find out if password and confirmation match
  if (arePasswordsMatching()){
    $confirmPassword.next().hide();
  }else{
      $confirmPassword.next().show();

  }  

}

function enableSubmitEvent(){
	$("#submit").prop("disabled", !canSubmit());
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent);

//when event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


canSubmit();


