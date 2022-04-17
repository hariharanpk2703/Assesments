function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);





function settime(){

    var x=document.getElementById("morning").value;
    var y = document.getElementById("afternoon").value;
    var z = document.getElementById("evening").value;
    var hour = new Date().getHours();

    if(x==hour){

        document.getElementById('imgcontainer').style.backgroundImage="url(new clock\Component-30.png)"
        document.getElementById('textcontainer').innerText='Wake Up !!';
        document.getElementById("smallbox").innerText="Good Morning !!";
    }

    if(y==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url(new clock\Component 31.png)"
        document.getElementById("textcontainer").innerText="Let's Have Some Lunch !!";
        document.getElementById("smallbox").innerText="Good Afternoon !!";
    }

    if(z==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url(new clock\Component 32.png)"
        document.getElementById("textcontainer").innerText="Good Night !!";
        document.getElementById("smallbox").innerText="Good Night !!";
    }    
    
//     settime();
   

// var invalue1 = document.getElementById("morning");
//     var value = invalue1.options[invalue1.selectedIndex].text;
//     document.getElementById("descriptiontext1").innerHTML="Wake Up Time : " + value;
    
//     var invalue2 = document.getElementById("afternoon");
//     var value = invalue2.options[invalue2.selectedIndex].text;
//     document.getElementById("descriptiontext2").innerHTML="Lunch Time : " + value;
    
    
//     var invalue3 = document.getElementById("evening");
//     var value = invalue3.options[invalue3.selectedIndex].text;
//     document.getElementById("descriptiontext3").innerHTML="Nap Time : " + value;
    

}