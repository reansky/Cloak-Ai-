/* =========================================================
   ROBINHOOD CLOAK V4
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
      LOADER
    ==========================*/

    const loader = document.getElementById("loader");
    const progress = document.getElementById("loader-progress");

    let value = 0;

    const loading = setInterval(() => {

        value += 2;

        if (progress) {
            progress.style.width = value + "%";
        }

        if (value >= 100) {

            clearInterval(loading);

            setTimeout(() => {

                if (loader) {

                    loader.style.opacity = "0";
                    loader.style.pointerEvents = "none";

                    setTimeout(() => {

                        loader.remove();

                    },500);

                }

            },300);

        }

    },25);

    /*==========================
      BACK TO TOP
    ==========================*/

    const topButton = document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topButton.style.display="flex";

        }else{

            topButton.style.display="none";

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*==========================
      PROGRESS BAR
    ==========================*/

    const progressBar=document.getElementById("progress-bar");

    window.addEventListener("scroll",()=>{

        const scroll=

        document.documentElement.scrollTop;

        const height=

        document.documentElement.scrollHeight-

        document.documentElement.clientHeight;

        progressBar.style.width=

        (scroll/height)*100+"%";

    });

    /*==========================
      HERO FLOAT
    ==========================*/

    const hero=document.querySelector(".hero-image img");

    document.addEventListener("mousemove",(e)=>{

        if(!hero) return;

        const x=(e.clientX/window.innerWidth-.5)*12;

        const y=(e.clientY/window.innerHeight-.5)*12;

        hero.style.transform=

        `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

});
