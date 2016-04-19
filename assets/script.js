$(document).ready(function(){

  //Two buttons
  //One for going up
  $("#up").click(function(){
    var id = $('.active').attr('id').split('_')[1];
    if (id == 1) return false;
    --id;
    $('.step').removeClass('active');
    $('#tube_'+id).css('background-position', '0px 0px');
    myPos = $('#tube_'+id).css("background-position").split(" ");
    $("#step_"+id).addClass('active');
  });
  //One for going down
  $("#down").click(function(){
     var id = $('.active').attr('id').split('_')[1];
     if (id == $(".step").length) return false;

     $('.step').removeClass('active');
     $('#tube_'+id).css('background-position', '0px 50px');
     myPos = $('#tube_'+id).css("background-position").split(" ");
     ++id;
     $("#step_"+id).addClass('active');

   });
});
