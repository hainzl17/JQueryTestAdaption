/* Put code for the task below */

$(document).ready(function(){
  $("#imageTask1").hover(function(){
    $("#buttonTask1").css("display", "block");
  });
  $("#buttonTask1").click(function(){
    $("#imageTask1").hide();
  });
});
