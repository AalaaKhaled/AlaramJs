var clock = setInterval(function(){
var d = new Date();
var h = document.getElementById("hours");
var p = document.getElementById("p");
if(Number(d.getHours())-12 < 0){
    h.innerHTML = d.getHours();
    p.innerHTML = "AM"
}else{
    h.innerHTML = Number(d.getHours())-12;
    p.innerHTML = "PM"

}
var m= document.getElementById("min");
m.innerHTML = d.getMinutes();
var s= document.getElementById("sec");
s.innerHTML = d.getSeconds();
var day = d.getDay();
switch(day){
    case 0:
        document.getElementById("SUN").style.color = "black";
        break;
    case 1:
        document.getElementById("MON").style.color = "black";
        break;
    case 2:
        document.getElementById("TUE").style.color = "black";
        break;
    case 3:
        document.getElementById("WED").style.color = "black";
        break; 
    case 4:
        document.getElementById("THU").style.color = "black";
        break; 
    case 5:
        document.getElementById("FRI").style.color = "black";
        break; 
    case 6:
        document.getElementById("SAT").style.color = "black";
        break;
}
},1000);

function alarm(){
 var alarm = document.getElementById("window");
 alarm.classList.remove("hide");
}


function cclose(){
    var alarm = document.getElementById("window");
    alarm.classList.add("hide");
   }
   var newalarm;
function set(){     
      newalarm = setInterval(function(){
        var secalarm =document.getElementById("secalarm").value;
        var alhour =document.getElementById("houralarm").value;
        var minalarm =document.getElementById("minalarm").value;
       var a = ((Number(alhour)*60*60)+(Number(minalarm)*60)+Number(secalarm))-1;
       if(a >= 0){
        var hours = Math.floor(a / 60 / 60);
        var minutes = Math.floor(a / 60) - (hours * 60);
        var seconds = a % 60;
        document.getElementById("houralarm").value = hours;
        document.getElementById("minalarm").value = minutes;
        document.getElementById("secalarm").value =seconds;
    }else{
     clearInterval(newalarm);
     alert("Alarm!!!")
    }
    },1000);
   
   
}

function cclear(){
    clearInterval(newalarm);
    document.getElementById("houralarm").value = 0;
    document.getElementById("minalarm").value = 0;
    document.getElementById("secalarm").value = 0;
}