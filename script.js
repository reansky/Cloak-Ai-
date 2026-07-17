const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const cards = document.querySelectorAll(".card");
const output = document.getElementById("ai-output");

function generateToken(prompt) {

    const clean = prompt.trim();

    const ticker = clean
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .split(" ")
        .map(word => word.charAt(0))
        .join("")
        .toUpperCase();

    return `
<h2 style="color:#00C805;">🚀 Token Generator</h2>

<h3>Token Name</h3>
<p>${clean}</p>

<h3>Ticker</h3>
<p>$${ticker}</p>

<h3>Description</h3>
<p>${clean} is a community-driven meme token built for Robinhood Chain, designed to bring fun, creativity and strong community engagement.</p>

<h3>Narrative</h3>
<p>${clean} combines meme culture with Robinhood Chain, creating a recognizable and shareable brand for builders and traders.</p>

<h3>Utility</h3>
<ul>
<li>Community Rewards</li>
<li>Meme Campaigns</li>
<li>AI Branding</li>
<li>Future Ecosystem Expansion</li>
</ul>

<h3>Roadmap</h3>
<ul>
<li>Phase 1 — Branding</li>
<li>Phase 2 — Community</li>
<li>Phase 3 — Marketing</li>
<li>Phase 4 — Expansion</li>
</ul>

<h3>First X Post</h3>
<p>
Introducing <strong>${clean}</strong> ($${ticker}) 🚀<br><br>
Built for Robinhood Chain.<br>
Powered by community.<br>
Ready to build the next meme movement.<br><br>

#RobinhoodChain #Memecoin
</p>
`;
}

function generate() {

    const prompt = input.value.trim();

    if(prompt===""){

        output.innerHTML="<p>Please enter a prompt.</p>";

        return;

    }

    output.innerHTML = generateToken(prompt);

}

button.addEventListener("click", generate);

input.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        generate();

    }

});

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        input.value = card.querySelector("h3").innerText;

        generate();

    });

});

const copyBtn = document.getElementById("copyBtn");

if(copyBtn){

copyBtn.onclick=()=>{

navigator.clipboard.writeText(output.innerText);

copyBtn.innerHTML="✅ Copied";

setTimeout(()=>{

copyBtn.innerHTML="📋 Copy";

},1500);

};

}

const downloadBtn=document.getElementById("downloadBtn");

if(downloadBtn){

downloadBtn.onclick=()=>{

const blob=new Blob([output.innerText],{type:"text/plain"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="cloak-ai-output.txt";

link.click();

};

}
