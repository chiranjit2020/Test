


//Top Button

let btn = document.getElementById("top");
    btn.addEventListener("click", toTop);

    window.onscroll = () => {
      if(window.pageYOffset >= 400 || document.pageYOffset >= 400){
        btn.style.opacity = 1;
      }else{
        btn.style.opacity = 0;
      }
    }

    function toTop(){
      window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      });
    }
