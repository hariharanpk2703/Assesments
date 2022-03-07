function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");

    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";

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


    hours.innerText=hrs;
    minutes.innerHTML=mins;
    seconds.innerHTML=secs;
    am.innerHTML=am_pm;

}
setInterval(clock,1000);

function setDisplay(){

    var wakeup_value = document.getElementById('wakeup-time').value;
    var lunch_value = document.getElementById("lunch-time").value;
    var nap_value = document.getElementById("nap-time").value;
    var night_value = document.getElementById("night-time").value;
    var current_hours = new Date().getHours();


    if(wakeup_value == current_hours){

        // document.getElementById('show-img').style.backgroundImage="url(MorningPic.svg)"
        document.getElementById('show-img').style.backgroundImage="url(Wakeup.jpg)"
        document.getElementById('show-text').innerHTML='Grab Some Healthy Breakfast!!!';
        document.getElementById("show-wish").innerHTML="GOOD MORNING!! WAKE UP !!";
    }

    if(lunch_value == current_hours){
        document.getElementById("show-img").style.backgroundImage="url(lunch.jpg)"
        document.getElementById("show-text").innerHTML="Let's Have Some Lunch !!";
        document.getElementById("show-wish").innerHTML="Good Afternoon!!";
    }

    if(nap_value == current_hours){
        document.getElementById("show-img").style.backgroundImage="url(nap.jpg)"
        document.getElementById("show-text").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("show-wish").innerHTML="Good Night !!";
    }
    
    if(night_value == current_hours){
        document.getElementById("show-img").style.backgroundImage="url(night.jpg)"
        document.getElementById("show-text").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("show-wish").innerHTML="Good Night !!";
    }


    var wakeup_note_value = document.getElementById('wakeup-time');
    var lunch_note_value = document.getElementById("lunch-time");
    var nap_note_value = document.getElementById("nap-time");
    var night_note_value = document.getElementById("night-time");

    var value = wakeup_note_value.options[wakeup_note_value.selectedIndex].text;
    document.getElementById("wakeup-note").innerHTML="Wake Up Time : " + value;

    var value = lunch_note_value.options[lunch_note_value.selectedIndex].text;
    document.getElementById("lunch-note").innerHTML="Lunch Time : " + value;

    var value = nap_note_value.options[nap_note_value.selectedIndex].text;
    document.getElementById("nap-note").innerHTML="Nap Time : " + value;

    var value = night_note_value.options[night_note_value.selectedIndex].text;
    document.getElementById("night-note").innerHTML="Night Time : " + value;

    
}