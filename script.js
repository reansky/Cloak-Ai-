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


    if(navbar){


        if(window.scrollY > 50){


            navbar.style.borderBottom =
            "1px solid #222";


        }else{


            navbar.style.borderBottom =
            "none";


        }


    }


});







// REVEAL ANIMATION


const animated = document.querySelectorAll(
".market-card, .token-card, .about, .community"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform=
        "translateY(0)";


    }


});


},{threshold:.2});





animated.forEach(item=>{


    item.style.opacity="0";

    item.style.transform=
    "translateY(40px)";


    item.style.transition=
    "all .8s ease";


    observer.observe(item);


});







// FUTURE LIVE DATA PLACE

// Nanti Dexscreener API akan dimasukkan disini
// Price
// Market Cap
// Volume
// Liquidity
