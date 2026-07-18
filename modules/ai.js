/* =====================================================
   THE CLOAK AI SYSTEM
   Version 2.0
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{


const cloakToggle =
document.getElementById("cloak-toggle");


const cloakChat =
document.getElementById("cloak-chat");


const closeChat =
document.getElementById("close-chat");


const sendButton =
document.getElementById("send-message");


const userInput =
document.getElementById("user-input");


const messages =
document.getElementById("chat-messages");





if(!cloakToggle || !cloakChat){

    console.log("Cloak AI UI not found");

    return;

}





cloakToggle.style.display="flex";





cloakToggle.addEventListener("click",()=>{

    cloakChat.style.display="block";

});





if(closeChat){

closeChat.addEventListener("click",()=>{

    cloakChat.style.display="none";

});

}





function addUserMessage(text){


const div=document.createElement("div");

div.className="user-message";

div.innerText=text;

messages.appendChild(div);


messages.scrollTop =
messages.scrollHeight;


}





function addBotMessage(text){


const div=document.createElement("div");

div.className="bot-message";

div.innerHTML=text;

messages.appendChild(div);


messages.scrollTop =
messages.scrollHeight;


}






function getReply(question){


question =
question.toLowerCase();




if(question.includes("$rhc")
|| question.includes("rhc")){


return "🟢 Robinhood Cloak ($RHC) is a community-driven meme token built on Robinhood Chain.";


}





if(question.includes("website")){


return "🌐 Welcome to the official Robinhood Cloak ecosystem.";


}





if(question.includes("roadmap")){


return "🚀 Website → AI → Terminal → Market → Dashboard.";


}





if(question.includes("contract")){


return "📜 Contract information will be updated after launch.";


}





if(
question.includes("hello")
||
question.includes("hi")
||
question.includes("gm")
){


return "👋 Welcome, Cloaked One. How can I help?";


}





return "🟢 The Cloak AI is learning. More intelligence modules coming soon.";


}






function sendMessage(){


const text =
userInput.value.trim();



if(text==="") return;



addUserMessage(text);



userInput.value="";



setTimeout(()=>{


addBotMessage(
getReply(text)
);


},500);



}





if(sendButton){

sendButton.addEventListener(
"click",
sendMessage
);

}





if(userInput){

userInput.addEventListener(
"keypress",
(e)=>{

if(e.key==="Enter"){

sendMessage();

}

});


}





console.log("✅ The Cloak AI Online");


});
