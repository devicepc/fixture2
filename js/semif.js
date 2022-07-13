let sem1 = document.querySelectorAll('.semWin1');
let sem2 = document.querySelectorAll('.semWin2');
let sem3 = document.querySelectorAll('.semWin3');
let sem4 = document.querySelectorAll('.semWin4');


for(a of  sem1){
    a.addEventListener('click', function(){
      let semwinA = this.innerHTML; 
      
        function s(){
            const semiQatarwin2 = document.getElementById("semiQatar2").innerText;
                document.getElementById("semiQatar2").innerHTML= semwinA;
              }
        s();
    })}
    for(a of  sem2){
        a.addEventListener('click', function(){
          let semwinB = this.innerHTML; 
            function s(){
                const semiQatarwin1 = document.getElementById("semiQatar1").innerText;
                    document.getElementById("semiQatar1").innerHTML= semwinB;
                    vs13();
                  }
            s();
        })}

        for(a of  sem3){
            a.addEventListener('click', function(){
              let semwinC = this.innerHTML; 
                function s(){
                    const semiQatarwin4 = document.getElementById("semiQatar4").innerText;
                        document.getElementById("semiQatar4").innerHTML= semwinC;
                        // movef();
                      }
                s();
            })}
            for(a of  sem4){
                a.addEventListener('click', function(){
                  let semwinD = this.innerHTML; 
                    function s(){
                        const semiQatarwin3 = document.getElementById("semiQatar3").innerText;
                            document.getElementById("semiQatar3").innerHTML= semwinD;
                            vs14();
                            movef();
                          }
                    s();
                })}
        
                function movef(){
                  console.log("semis");
                  const pageWidth  = document.documentElement.scrollWidth;
                  if(pageWidth <=480){
                  window.scrollTo(0,2020);
                  }else if(pageWidth <=768){
                      window.scrollTo(0,690);
                  }else if(pageWidth > 1600){
                      window.scrollTo(0,420 );
                  }
              }

    // finales 
    let finalClas1 = document.querySelectorAll('.semiQatarwin1');
let finalClas2 = document.querySelectorAll('.semiQatarwin2');
  

for(a of  finalClas1){
  a.addEventListener('click', function(){
    let finalClasA = this.innerHTML; 
      function s(){
          const finalf1 = document.getElementById("FinalGame1").innerText;
      if(finalf1 != ""){
          document.getElementById("FinalGame3").innerHTML= finalClasA;
          
      }else{
              document.getElementById("FinalGame1").innerHTML= finalClasA;
              vs15();
            }}
      s();
  })}

  for(a of  finalClas2){
    a.addEventListener('click', function(){
      let finalClasB = this.innerHTML; 
        function s(){
            const finalClasb = document.getElementById("FinalGame2").innerText;
            if(finalClasb != ""){
              document.getElementById("FinalGame4").innerHTML= finalClasB;
              move3place();
          }else{
                document.getElementById("FinalGame2").innerHTML= finalClasB;
                vs16();
              }}
        s();
    })}

   // move
   function move3place(){
    const pageWidth  = document.documentElement.scrollWidth;
        if(pageWidth <=480){
          console.log("#3place");
        window.scrollTo(0,2220);
        }else if(pageWidth <=768){
            window.scrollTo(0,690);
        }else if(pageWidth > 1600){
            window.scrollTo(0,420 );
        }
   }
   
    // final 
    let finalwin =document.querySelectorAll('.FinalGame1');
    let tPlace1 = document.querySelectorAll('.tplaceGame2');
 // tercer lugar         
        
 
 for(a of  tPlace1){
  a.addEventListener('click', function(){
    let tPlace1 = this.innerHTML; 
      function s(){
          const tplaceClasA = document.getElementById("Finaltplace").innerText;
              document.getElementById("Finaltplace").innerHTML= " is : "+tPlace1;
              /* let x = ;
              let second = x != finalwin;
              document.getElementById("FinalSecond").innerHTML= " is : "+second; */
            }
      s();
  })}

    for(a of  finalwin){
      a.addEventListener('click', function(){
        let finalWin = this.innerHTML; 
          function s(){
              const finalClasb = document.getElementById("FinalWin").innerText;
                  document.getElementById("FinalWin").innerHTML= " is : "+finalWin;
                  /* let x = ;
                  let second = x != finalwin;
                  document.getElementById("FinalSecond").innerHTML= " is : "+second; */
                  movewin();
                }
               
          s();
      })}
  

      function movewin(){
        const pageWidth  = document.documentElement.scrollWidth;
        if(pageWidth <=480){
        window.scrollTo(0,2520);
        }else if(pageWidth <=768){
            window.scrollTo(0,690);
        }else if(pageWidth > 1600){
            window.scrollTo(0,420 );
        }
        
    }
      function vs13(){
        document.getElementById('vs13').style.display ="block";
    }
    function vs14(){
      document.getElementById('vs14').style.display ="block";
  }
  function vs15(){
    document.getElementById('vs15').style.display ="block";
}
function vs16(){
  document.getElementById('vs16').style.display ="block";
}