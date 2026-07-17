
// Robinhood Cloak $RHC
// Main Website Script


console.log("Robinhood Cloak $RHC loaded");




// Copy Contract Function

function copyCA(){

    const contract = document.getElementById("contract");

    if(contract){

        navigator.clipboard.writeText(contract.innerText);

        alert("Contract copied!");

    }

}





// Smooth reveal animation

const sections = document.querySelectorAll(
    ".about, .token-section, .roadmap, .community, .token-card"
);



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{
    threshold:0.15
});



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
