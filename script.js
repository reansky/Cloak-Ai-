console.log("Robinhood Cloak $RHC Final Script Loaded");



// =======================
// LOADER
// =======================


window.addEventListener("load",()=>{


const loader =
document.getElementById("loader");



if(loader){


setTimeout(()=>{


loader.style.opacity="0";

loader.style.transition="0.5s";



setTimeout(()=>{


loader.style.display="none";


},500);



},1800);



}



});







// =======================
// COPY CONTRACT
// =======================


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







// =======================
// NAVBAR EFFECT
// =======================


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







// =======================
// SCROLL REVEAL
// =======================


const elements =
document.querySelectorAll(
".market-card, .token-card, .steps div, .about, .community, .disclaimer"
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
threshold:0.15
});






elements.forEach(el=>{


el.style.opacity="0";


el.style.transform =
"translateY(40px)";


el.style.transition =
"all .8s ease";



observer.observe(el);



});








// =======================
// DEXSCREENER READY
// =======================


// Setelah token launch,
// isi CONTRACT_ADDRESS
// agar data live muncul



const CONTRACT_ADDRESS =
"YOUR_CONTRACT_ADDRESS";





async function loadDexData(){


if(
CONTRACT_ADDRESS ===
"YOUR_CONTRACT_ADDRESS"
){

console.log(
"Waiting for contract address..."
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



if(!pair) return;



document.getElementById("price").innerText =
"$"+Number(pair.priceUsd)
.toFixed(6);



document.getElementById("marketcap").innerText =
"$"+Number(pair.marketCap)
.toLocaleString();



document.getElementById("volume").innerText =
"$"+Number(pair.volume.h24)
.toLocaleString();



document.getElementById("liquidity").innerText =
"$"+Number(pair.liquidity.usd)
.toLocaleString();



}

catch(error){

console.log(
"Dex error:",
error
);

}



}




loadDexData();



setInterval(
loadDexData,
60000
);



/* =====================================================
   THE CLOAK AI
===================================================== */

const cloakToggle = document.getElementById("cloak-toggle");
const cloakChat = document.getElementById("cloak-chat");
const closeChat = document.getElementById("close-chat");

const sendButton = document.getElementById("send-message");
const userInput = document.getElementById("user-input");
const messages = document.getElementById("chat-messages");



cloakToggle.addEventListener("click",()=>{

    cloakChat.style.display="flex";

});


closeChat.addEventListener("click",()=>{

    cloakChat.style.display="none";

});



function addUserMessage(text){

    const div=document.createElement("div");

    div.className="user-message";

    div.innerText=text;

    messages.appendChild(div);

    messages.scrollTop=messages.scrollHeight;

}



function addBotMessage(text){

    const div=document.createElement("div");

    div.className="bot-message";

    div.innerHTML=text;

    messages.appendChild(div);

    messages.scrollTop=messages.scrollHeight;

}



function getReply(question){

    question=question.toLowerCase();



    if(question.includes("what is rhc") ||
       question.includes("$rhc")){

        return "🟢 Robinhood Cloak ($RHC) is a community-driven meme token built on Robinhood Chain.";


    }



    if(question.includes("website")){

        return "🌐 You are already on the official Robinhood Cloak website.";

    }



    if(question.includes("telegram")){

        return "📢 Telegram will be announced soon.";

    }



    if(question.includes("x") ||
       question.includes("twitter")){

        return "🐦 Follow our official X account for the latest updates.";

    }



    if(question.includes("contract")){

        return "📜 The contract address will appear here after launch.";

    }



    if(question.includes("roadmap")){

        return "🚀 Build • Launch • Community • Grow.";

    }



    if(question.includes("hello") ||
       question.includes("hi") ||
       question.includes("gm")){

        return "👋 Welcome, Cloaked One.";

    }



    if(question.includes("wen")){

        return "🌕 Great things take time. Stay cloaked.";

    }



    return "🟢 The Cloak is still learning. More AI knowledge will be added soon.";

}



function sendMessage(){

    const text=userInput.value.trim();

    if(text==="") return;



    addUserMessage(text);

    userInput.value="";



    setTimeout(()=>{

        addBotMessage(

            getReply(text)

        );

    },500);

}



sendButton.addEventListener("click",sendMessage);



userInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        sendMessage();

    }

});
