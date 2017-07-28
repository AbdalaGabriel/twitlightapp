



$( document ).ready(function() {
    console.log("- Se inicia el documento");
    init();
});


function init()
{
  console.log("init");
  lihgts();
}

function lihgts()
{
  $(".openflash").click(function()
      {
        window.plugins.flashlight.available(function(isAvailable) {
        if (isAvailable) {
       
         $(".openflash").text("available");
          // switch on 
          window.plugins.flashlight.switchOn(
            function() {}, // optional success callback 
            function() {}, // optional error callback 
            {intensity: 0.3} // optional as well 
          );
       
          // switch off after 3 seconds 
          setTimeout(function() {
            window.plugins.flashlight.switchOff(); // success/error callbacks may be passed 
          }, 3000);
       
        } else {
          $(".openflash").text("sorry-not");
          console.log("Flashlight not available on this device");
        }
    });
  });
}