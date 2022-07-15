let roundof16a = document.querySelectorAll('.Country');
let roundof16b = document.querySelectorAll('.Country2');
let roundof16c = document.querySelectorAll('.Country3');
let roundof16d = document.querySelectorAll('.Country4');
let roundof16e = document.querySelectorAll('.Country5');
let roundof16f = document.querySelectorAll('.Country6');
let roundof16g = document.querySelectorAll('.Country7');
let roundof16h = document.querySelectorAll('.Country8');


// priemros round of 16
for(a of roundof16a){
    a.addEventListener('click', function(){
      let element = this.innerHTML; 
        function s(){
            const qf1 = document.getElementById("rof1").innerText;
            if(qf1 != ""){
                document.getElementById("rof4").innerHTML= element;
                
            }else{
                document.getElementById("rof1").innerHTML= element ;
             vs1();
            }}
        s();
        })}

// round of 16 de gurpo b
for(b of roundof16b){
    b.addEventListener('click', function(){
      let elements = this.innerHTML;         
        function s(){
            const rof3 = document.getElementById("rof3").innerText;
            if(rof3 != ""){
                document.getElementById("rof2").innerHTML= elements;
            }else{
                document.getElementById("rof3").innerHTML= elements ;
                vs2();
            }
        }
        s();
    
    })
}
// round of 16 de grupo c
for(c of roundof16c){
    c.addEventListener('click', function(){
      let rofc = this.innerHTML; 
        function s(){
            const rof5 = document.getElementById("rof5").innerText;
            if(rof5 != ""){
                document.getElementById("rof8").innerHTML= rofc;
            }else{
                document.getElementById("rof5").innerHTML= rofc ;
                vs3();
                
            } }
        s();   
    })}
// grupo d

for(d of roundof16d){
    d.addEventListener('click', function(){
      let rofd = this.innerHTML;         
        function s(){
            const rof7 = document.getElementById("rof7").innerText;
            if(rof7 != ""){
                document.getElementById("rof6").innerHTML= rofd;
            }else{
                document.getElementById("rof7").innerHTML= rofd ;
                vs4();
                
            }  }
        s();
        })}
// grupo e
for(a of roundof16e){
    a.addEventListener('click', function(){
      let rofe = this.innerHTML; 
        function s(){
            const rof9 = document.getElementById("rof9").innerText;
            if(rof9 != ""){
                document.getElementById("rof12").innerHTML= rofe;
            }else{
                document.getElementById("rof9").innerHTML= rofe ;
                vs5();
                
            }  }
        s();
    })}

    // grupo f
for(a of roundof16f){
    a.addEventListener('click', function(){
      let roff = this.innerHTML;
        function s(){
            const rof11 = document.getElementById("rof11").innerText;
            if(rof11 != ""){
                document.getElementById("rof10").innerHTML= roff;
            }else{
                document.getElementById("rof11").innerHTML= roff ;
                vs6();
                
            }  }
        s();
    })}
        // grupo g
for(a of roundof16g){
    a.addEventListener('click', function(){
      let rofg = this.innerHTML; 
        function s(){
            const rof13 = document.getElementById("rof13").innerText;
            if(rof13 != ""){
                document.getElementById("rof16").innerHTML= rofg;
                
            }else{
                document.getElementById("rof13").innerHTML= rofg ;
                vs7();
                
            }  }
        s();
    })}

            // grupo h
for(a of  roundof16h){
    a.addEventListener('click', function(){
      let rofh = this.innerHTML; 
        function s(){
            const rof15 = document.getElementById("rof15").innerText;
            if(rof15 != ""){
                document.getElementById("rof14").innerHTML= rofh;
                
            }else{
                document.getElementById("rof15").innerHTML= rofh ;
                vs8();
                moveQ();
            }  }
        s();
    })}

  

function vs1(){
    document.getElementById('vs').style.display ="block";
}
function vs2(){
    document.getElementById('vs2').style.display ="block";
}
function vs3(){
    document.getElementById('vs3').style.display ="block";
}
function vs4(){
    document.getElementById('vs4').style.display ="block";
}
function vs5(){
    document.getElementById('vs5').style.display ="block";
}
function vs6(){
    document.getElementById('vs6').style.display ="block";
}
function vs7(){
    document.getElementById('vs7').style.display ="block";
}
function vs8(){
    document.getElementById('vs8').style.display ="block";
}
  // move
  function moveQ(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <=480){
    window.scrollTo(0,2700);
    }else if(pageWidth <=768){
        window.scrollTo(0,690);
    }else if(pageWidth > 1600){
        window.scrollTo(0,420 );
    }

    
}
