let qwin49 = document.querySelectorAll('.qof49');
let qof50 = document.querySelectorAll('.qof50');
let qof51 = document.querySelectorAll('.qof51');
let qof52 = document.querySelectorAll('.qof52');
let qof53 = document.querySelectorAll('.qof53');
let qof54 = document.querySelectorAll('.qof54');
let qof55 = document.querySelectorAll('.qof55');
let qof56 = document.querySelectorAll('.qof56');


for(a of  qof53){
    a.addEventListener('click', function(){
        let semwinA = this.innerHTML; 
        document.getElementById(this.id).innerHTML=' USED ';
     document.getElementById(this.id).style.cursor='not-allowed'; 
     document.getElementById(this.id).style.backgroundColor= "#c70c44"; 
        function s(){
                document.getElementById("smf1").innerHTML= semwinA ;
              }
        s();
    })};

    for(a of  qof54){
        a.addEventListener('click', function(){
          let qof2 = this.innerHTML; 
          document.getElementById(this.id).innerHTML=' USED ';
     document.getElementById(this.id).style.cursor='not-allowed'; 
     document.getElementById(this.id).style.backgroundColor= "#c70c44"; 
            function s(){
                const smf2 = document.getElementById("smf2").innerText;
                    document.getElementById("smf2").innerHTML= qof2;
                    vs9();
                  }
            s();
        })}
  
        // sdos cuartos
  
        for(a of  qwin49){
          a.addEventListener('click', function(){
            let qof3 = this.innerHTML; 
            document.getElementById(this.id).innerHTML=' USED ';
     document.getElementById(this.id).style.cursor='not-allowed'; 
     document.getElementById(this.id).style.backgroundColor= "#c70c44"; 
              function s(){
                      document.getElementById("smf3").innerHTML= qof3 ;
                    }
              s();
          })}
      
          for(a of  qof50){
            a.addEventListener('click', function(){
              let qof4 = this.innerHTML; 
              document.getElementById(this.id).innerHTML=' USED ';
     document.getElementById(this.id).style.cursor='not-allowed'; 
     document.getElementById(this.id).style.backgroundColor= "#c70c44"; 
                function s(){
                        document.getElementById("smf4").innerHTML= qof4;
                        vs10();
                      }
                s();
            })}
  
             // terceros cuartos
  
        for(a of  qof55){
          a.addEventListener('click', function(){
            let qof5 = this.innerHTML; 
            document.getElementById(this.id).innerHTML=' USED ';
     document.getElementById(this.id).style.cursor='not-allowed'; 
     document.getElementById(this.id).style.backgroundColor= "#c70c44"; 
              function s(){
                      document.getElementById("smf5").innerHTML= qof5 ;
                    }
              s();
          })}
      
          for(a of  qof56){
            a.addEventListener('click', function(){
              let qof6 = this.innerHTML; 
              document.getElementById(this.id).innerHTML=' USED ';
     document.getElementById(this.id).style.cursor='not-allowed'; 
     document.getElementById(this.id).style.backgroundColor= "#c70c44"; 
                function s(){

                        document.getElementById("smf6").innerHTML= qof6;
                        vs11();
                        moveQF();
                      }
                s();
            })}
                  // cuartos cuartos
  
        for(a of  qof51){
          a.addEventListener('click', function(){
            let qof7 = this.innerHTML; 
            document.getElementById(this.id).innerHTML=' USED ';
     document.getElementById(this.id).style.cursor='not-allowed'; 
     document.getElementById(this.id).style.backgroundColor= "#c70c44"; 
              function s(){
                      document.getElementById("smf7").innerHTML= qof7 ;
                    }
              s();
          })}
      
          for(a of  qof52){
            a.addEventListener('click', function(){
              let qof8 = this.innerHTML; 
              document.getElementById(this.id).innerHTML=' USED ';
     document.getElementById(this.id).style.cursor='not-allowed'; 
     document.getElementById(this.id).style.backgroundColor= "#c70c44"; 
                function s(){
                        document.getElementById("smf8").innerHTML= qof8;
                        vs12();
                        
                      }
                s();
            })}
  
          
            function vs9(){
              document.getElementById('vs9').style.display ="block";
          }
          function vs10(){
              document.getElementById('vs10').style.display ="block";
          }
          function vs11(){
              document.getElementById('vs11').style.display ="block";
          }    
          function vs12(){
            document.getElementById('vs12').style.display ="block";
        }   

       // move
  function moveQF(){
    console.log("quarter");
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <=399){
      window.scrollTo(0,1900) 
   }else if(pageWidth <=480){
    window.scrollTo(0,1400);
    }else if(pageWidth <=768){
        window.scrollTo(0,1090);
    }else if(pageWidth > 1600){
        window.scrollTo(0,1020 );
    }  
}