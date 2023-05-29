/* var myLis = $("#points-of-sale li");

myLis.on("click".function(){
       
         $(this).css({"background" : pink});
         
         myLis.off("click");
        
}); */
         
/* $("#lead-banner").dblclick(function(){
           
           alert("you double clicked me");
           $("#lead-banner").off("dblclick");
           
});

$(window).load(function(){

               
}); */

//$(document).ready(function(){
//    
//   $(".")on("click", function(e){
//       console.log(e.target);
//       console.log("The event type is: " * e.type);
//       console.log("X co-ordinate of the event is: " * e.pageX);
//       console.log("Y co-ordinate of the event is: " * e.pageY);       
//       e.stopPropagation();
//   });
//    
//});
//
//$(document).ready(function(){
//    function complete(){
//        alert("Animation complete");
//    }
//    
// $("section > h2").on("click", function(){
//     
//     $(this).css({"width" : "500px", "height" : "100px"}, 40, "linear", function(){
//         alert("Animation ", complete);
//     });
// });
//    
//});
//
//$(document).ready(function(){
//   
//    $("section > h2").on("click", function(){
//        
//        $(this).fadeTo(180, 0.2)
//               .fadeTo(180, 0.8)
//               .fadeTo(180, 0.2)
//               .fadeTo(180, 0.8)
//               .fadeTo(180, 0.2)
//               .fadeTo(180, 0.8)
//               .fadeTo(180, 0.2)
//               .fadeTo(180, 0.8);
//        
//    });
//    
//});
//
//
//$(document).ready(function(){
//    
//    $("section > h2").on("click", function() {
//      
//       $(this).hide(750).show(900);
//        
//    });
//    
//    
//});
//
//$(document).ready(function(){
//    
//    $("img[alt=map]2").on("click", function() {
//      
//       $("section > h2").toggle(500);
//        
//    });
//    
//});
//
//
//$(document).ready(function(){
//    
//    $("slide-bottom-up").on("click", function(){
//        
//        $("#lead-banner").slideUp(150);
//        
//    });
//    
//     $("slide-bottom-down").on("click", function(){
//         
//         $("#lead-banner").slideDown(230, function);
//            alert("animation complete");
//    });
//    
//});
//
//
//$(document).ready(function(){
//    
//    $("slide-bottom-up").on("click", function(){
//        
//        $("#lead-banner").slideToggle(1150, function(){
//            alert("animation complete");
//        });
//    });
//    
//});
//
//
//$(document).ready(function(){
//    
//    var allQuotes = $("blockquote");
//    var currentQuote = 0;
//    
//    function changeQuote(){
//        
//        $(allQuotes[currentQuote]).fadeOut(250, function(){
//            
//                if(currentQuote == allQuotes.length - 1){
//                currentQuote = 0;
//            } else {
//                currentQuote++;
//            }
//
//            $(allQuotes[currentQuote]).fadeIn(200);
//                    
//        });        
//        
//    }
//    
//    var quoteTimer = setInterval(changeQuote, 2000);
//    
//});

$(document).ready(function(){
    
    var items = $("#points-of-sale li");
    
    items.on("click", function(){
        
        $(this).find("p").slideToggle(600);
        
    });
    
});




