/* Put code for the task below */
$(document).ready(function(){
  var fullName = $("#fullName").val();
  var address = $("#address").val();
  var phone = $("#phone").val();
  var email = $("email").val();
  $("#button4").click(function(){
  if (fullName === 0){
    alert ("You need to fill in all of the forms correctly.");
  };
  if (address === 0){
    alert ("You need to fill in all of the forms correctly.");
  };
  if (email === 0){
    alert ("You need to fill in all of the forms correctly.");
  };
  if (phone === 0 || phone < 10){
    alert ("You need to fill in all of the forms correctly.");
    };
  });
});
