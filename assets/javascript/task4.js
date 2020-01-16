/* Put code for the task below */
$(document).ready(function(){
  var fullName = $("#fullName").val();
  var address = $("#address").val();
  var phone = $("#phone").val();
  var email = $("email").val();
  if (fullName === 0 && address == 0 && phone == 0 && email === 0){
    alert ("You need to fill in all of the forms.";)
  };
  if (phone < 10){
    alert ("Not a valid phone number")
  }
});
