



$( document ).ready(function() {
    console.log("- Se inicia el documento");
    init();
});


function init()
{
  console.log("init");
  var xhr = createCORSRequest('GET', "http://gabrielabdala.com");
    if (!xhr) {
        console.log(" - CORS  not Suported");
        throw new Error('CORS not supported');
    }else{
        console.log("- CORS Suported");

       

     listenhash();

        
 
}

function listenhash(){
    console.log("lite");
    $(".sendhash").click(function()
        {
           hashtosend =  $(".hash").val();
           console.log(hashtosend);

              
            var time = setInterval(myTimer, 5000);
            var requesturl = "http://gabrielabdala.com/tw/index.php?tw="+hashtosend; 

            function myTimer() {       
                $.ajax(
                    {
                    url: requesturl,

                    
     
                    type: 'GET',
                   
                     
                      success: function(res){

                   
                         console.log( "- Exito Ajax Carga: "+res );
                         $(".twit").text(res);
                         //lihgts();
                                    
                        }
                     });
                };
        });
}

function lihgts()
{
    console.log("ligths");

  
        window.plugins.flashlight.available(function(isAvailable) {
        if (isAvailable) {
       
         $(".openflash").text("available");
          // switch on 
          window.plugins.flashlight.switchOn(
            function() {}, // optional success callback 
            function() {}, // optional error callback 
            {intensity: 0.5} // optional as well 
          );
       
          // switch off after 3 seconds 
          setTimeout(function() {
            window.plugins.flashlight.switchOff(); // success/error callbacks may be passed 
          }, 1000);
       
        } else {
          $(".openflash").text("sorry-not");
          console.log("Flashlight not available on this device");
        }
    });
 
}

function createCORSRequest(method, url) 
{
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

} 
else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

} 
else
 {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

}
return xhr;
}

}