console.log("Robinhood Cloak $RHC Live Data System");



// ======================
// LOADER
// ======================

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






// ======================
// COPY CONTRACT
// ======================


function copyCA(){

    const contract =
    document.getElementById("contract");


    if(contract){

        navigator.clipboard.writeText(
            contract.innerText
        );


        alert("Contract copied!");

    }

}







// ======================
// DEXSCREENER LIVE DATA
// ======================


// GANTI NANTI DENGAN CONTRACT ASLI $RHC

const CONTRACT_ADDRESS =
"YOUR_CONTRACT_ADDRESS";





async function loadMarketData(){


    if(CONTRACT_ADDRESS === "YOUR_CONTRACT_ADDRESS"){

        console.log(
        "Waiting for token contract..."
        );

        return;

    }




    try{


        const response =
        await fetch(
        `https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`
        );


        const data =
        await response.json();



        const pair =
        data.pairs[0];



        if(!pair){

            return;

        }




        document.getElementById("price").innerText =
        "$" + Number(
        pair.priceUsd
        ).toFixed(6);





        document.getElementById("marketcap").innerText =
        "$" + 
        Number(
        pair.marketCap
        ).toLocaleString();






        document.getElementById("volume").innerText =
        "$" +
        Number(
        pair.volume.h24
        ).toLocaleString();






        document.getElementById("liquidity").innerText =
        "$" +
        Number(
        pair.liquidity.usd
        ).toLocaleString();



    }
    catch(error){


        console.log(
        "Dexscreener error:",
        error
        );


    }


}





// Jalankan saat website dibuka

loadMarketData();



// Update setiap 60 detik

setInterval(
loadMarketData,
60000
);








// ======================
// NAVBAR EFFECT
// ======================


window.addEventListener("scroll",()=>{


const navbar =
document.getElementById("navbar");



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








// ======================
// SCROLL ANIMATION
// ======================


const animated =
document.querySelectorAll(
".market-card, .token-card, .about, .community"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform =
"translateY(0)";


}


});


},
{
threshold:.2
}
);




animated.forEach(item=>{


item.style.opacity="0";

item.style.transform =
"translateY(40px)";


item.style.transition =
"all .8s ease";


observer.observe(item);


});
