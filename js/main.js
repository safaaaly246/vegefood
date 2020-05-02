



 // PRE LOADER
 $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



 $(window).scroll(function(){
    var sc =  $(window).scrollTop()
     if(sc>0){
      $(".navContainer").addClass("navbar1")
     console.log("welcome back")
 
     }  
     else {
              $(".navContainer").removeClass("navbar1");
           }
   })
 
   
     // WOW ANIMATION
     new WOW({ mobile: false }).init();

$(document).ready(function(){
    $(".list-product ul li").click(function(){
        $(".list-product ul li").removeClass("activeLi")

        $(this).addClass("activeLi")
    })

})






