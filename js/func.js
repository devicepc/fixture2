import { initCountries} from "./init.js";


initCountries();

const print = document.getElementById("print");
const refresh = document.getElementById("refresh");


refresh.addEventListener("click", function(event){
    location.reload();
})
document.getElementById("ir-arriba").addEventListener("click",scrollUp);
function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll >0){
        window.scrollTo(0,0);
    }
}


$(document).ready(() => {
    $('#print').click(function() {
      document.getElementById("titleprint").style.display='block';
      document.getElementById("titleprint2").style.display='block';
        $.print('#zoneprint');
        Functionretraso();
    });
   
});

// brorar luego de compara entradas

function Functionretraso() {
retrzomp4 = setTimeout(borarUserSelection, 6000 );
console.log("borarEntradas");
}
function borarUserSelection(){
document.getElementById("titleprint").style.display ="none"; 
document.getElementById("titleprint2").style.display ="none"; 
}
