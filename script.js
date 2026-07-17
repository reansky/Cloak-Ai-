console.log("Robinhood Cloak $RHC loaded");



// LOADER

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");


    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";


            setTimeout(()=>{

                loader.style.display="none";

            },500);


        },2000);

    }

});






// COPY CONTRACT


function copyCA(){


    const contract = document.getElementById("contract");


    if(contract){


        navigator.clipboard.writeText(contract.innerText);


        alert("Contract copied!");

    }


}






// NAVBAR SCROLL EFFECT


window.addEventListener("scroll",()=>{


    const navbar = document.getElementById("navbar");


    if(window.scrollY > 50){


        navbar.style.borderBottom="1px solid #222";


    }else{


        navbar.style.borderBottom="none";


    }


});






// SIMPLE REVEAL ANIMATION


const reveal = document.querySelectorAll(
    ".token-card, .community, .token-section"
);



const observer = new IntersectionObserver((items)=>{


    items.forEach(item=>{


        if(item.isIntersecting){


            item.target.style.opacity="1";

            item.target.style.transform="translateY(0)";


        }


    });


},{threshold:.2});





reveal.forEach(el=>{


    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition="1s";


    observer.observe(el);


});
