console.log("Robinhood Cloak $RHC website loaded");



// LOADER

window.addEventListener("load", ()=>{

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.style.display="none";

        },2500);

    }

});





// SCROLL REVEAL


const revealElements = document.querySelectorAll(
    ".about, .token-section, .roadmap, .community, .token-card, .road-grid div"
);



const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach((entry)=>{


        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }


    });



},{
    threshold:0.15
});





revealElements.forEach((element)=>{


    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition="1s";


    revealObserver.observe(element);


});







// NAVBAR EFFECT


window.addEventListener("scroll",()=>{


    const navbar = document.getElementById("navbar");


    if(window.scrollY > 50){

        navbar.style.borderBottom="1px solid #222";

    }else{

        navbar.style.borderBottom="none";

    }


});







// COPY CONTRACT READY


function copyCA(){


const contract = document.getElementById("contract");


if(contract){


navigator.clipboard.writeText(contract.innerText);


alert("Contract copied!");


}


}
