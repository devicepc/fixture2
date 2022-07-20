import { initCountries} from "./init.js";


initCountries();

const print = document.getElementById("print");
const refresh = document.getElementById("refresh");

print.addEventListener("click", function(event){
    window.print();
})

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