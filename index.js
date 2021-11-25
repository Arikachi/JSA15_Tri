var audio = document.getElementById("za");
var sun = document.getElementById("sun");

sun.addEventListener("click", function() {
    setTimeout(function(){ 
        audio.play();
        audio.muted=false;
     }, 95600);
  });



