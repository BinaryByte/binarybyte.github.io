$(document).ready(
  function(){
  $("div").hover(
    function(){
      $(this).css("background-color","black");
    }, 
    function(){
      $(this).css("background-color","purple");
    }
    );
  }
  );
