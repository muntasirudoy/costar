

//sticky menu start

$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 500){
    $("#home-header").addClass("sticky")
  }else{
    $("#home-header").removeClass("sticky")
  }
})

//sticky menu end











