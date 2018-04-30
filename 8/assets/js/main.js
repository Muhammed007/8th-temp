$(document).ready(function(){
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
});

//loading-screen
$(window).on('load',function(){ 
   $("body").css("overflow","auto");
   $(".loading-overlay").fadeOut();
 });