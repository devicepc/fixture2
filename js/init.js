import {countries} from "./data.js";


function initCountries (){
    document.getElementById("Country1").textContent = countries[0];
     document.getElementById("Country2").textContent = countries[1];
    document.getElementById("Country3").textContent = countries[2];
    document.getElementById("Country4").textContent = countries[3];
    document.getElementById("Country5").textContent = countries[4];
    document.getElementById("Country6").textContent = countries[5];
    document.getElementById("Country7").textContent = countries[6];
    document.getElementById("Country8").textContent = countries[7];
    document.getElementById("Country9").textContent = countries[8];
    document.getElementById("Country10").textContent = countries[9];
    document.getElementById("Country11").textContent = countries[10];
    document.getElementById("Country12").textContent = countries[11];
    document.getElementById("Country13").textContent = countries[12];
    document.getElementById("Country14").textContent = countries[13];
    document.getElementById("Country15").textContent = countries[14];
    document.getElementById("Country16").textContent = countries[15];
    document.getElementById("Country17").textContent = countries[16];
    document.getElementById("Country18").textContent = countries[17];
    document.getElementById("Country19").textContent = countries[18];
    document.getElementById("Country20").textContent = countries[19];
    document.getElementById("Country21").textContent = countries[20];
    document.getElementById("Country22").textContent = countries[21];
    document.getElementById("Country23").textContent = countries[22];
    document.getElementById("Country24").textContent = countries[23];
    document.getElementById("Country25").textContent = countries[24];
    document.getElementById("Country26").textContent = countries[25];
    document.getElementById("Country27").textContent = countries[26];
    document.getElementById("Country28").textContent = countries[27];
    document.getElementById("Country29").textContent = countries[28];
    document.getElementById("Country30").textContent = countries[29];
    document.getElementById("Country31").textContent = countries[30];
    document.getElementById("Country32").textContent = countries[31];

}

function printwidth(){
    const pageWidth  = document.documentElement.scrollWidth;
    alert("el ancho es : "+pageWidth);
}

export{initCountries, printwidth};