$("document").ready(function(){
   var lat;
   var long;
   $.getJSON("http://ip-api.com/json", function(dataZip){
    lat = dataZip.lat;
    long = dataZip.lon;
    // creating api with geolocation
    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=92c68ce70cb5920ab4187b42dd91d0a1";

    $.getJSON(api, function(data){
        var weatherType = data.weather[0].description;
        var kelvin = data.main.temp;
        var windSpeed = data.wind.speed;
        var city = data.name;
        var far;
        var cel;
        var farCes = true;
        var windTest = true;
        var windMileHour;
        //temparatura in Kelvin convert to Far or celsius
        far =((kelvin)*(9/5)-459.67).toFixed(0);
        cel = (kelvin - 273).toFixed(0);
        $("#city").html(city);
        $("#weather").html(weatherType);
        $("#temp").html(far + " &#8457;");

        $("#temp").click(function(){
            if (farCes === false){
            $("#temp").html(cel + " &#x2103")
            farCes = true;
            } else {
                $("#temp").html(far + " &#8457;");
                farCes = false;
            }
        });

        windMileHour = 2.237*(windSpeed).toFixed(1);
        $("#wind").html(windSpeed + " m/s");
       // $("#wind").click(function(){
           // $("wind").toggle(windMileHour)
      //  });
        //$("#wind").toggle(function(){
       //       $("wind").html(windMileHour + " miles/hour");
      //  },function(){
     //         $("#wind").html(windSpeed + " meter/sec");
    //    });
        $("#wind").click(function(){
            if(windTest===false){
                $("#wind").html(windMileHour.toFixed(1) + " mph");
                windTest = true;
            } else {
                 $("#wind").html(windSpeed + " m/s");
                windTest = false;
            }
        });
        if(far > 90){
             $("body").css("background-image","url(https://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/podcasts//site_197_Khmer_466028.JPG)");
        }
          else if(far > 80){
           $("body").css("background-image","url(http://6iee.com/data/uploads/44/522473.jpg)"); 
           console.log("test1");
        } else if(far > 70){
           $("body").css("background-image","url(https://c2.staticflickr.com/4/3549/3522505322_d972461595_z.jpg?zz=1)");
            $("h1, h3").css("color", "#ffffff");
            $("h1, h3").css("text-shadow","2px 2px 4px #ff0000");
        } else if(far < 35) {
            $("body").css("background-image","url(https://www.xootr.com/blog/wp-content/uploads/2016/02/cold-weather.jpg)");
        } else if(weatherType === "rain"){
            $("body").css("background-image","url(img/rain-13.jpg)");
        }
    });
   });
  });