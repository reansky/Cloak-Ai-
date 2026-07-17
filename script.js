const input = document.querySelector(".search input");
const button = document.querySelector(".search button");

const cards = document.querySelectorAll(".card");

let output = document.getElementById("ai-output");

cards.forEach(card=>{

card.onclick=()=>{

input.value=card.querySelector("h3").innerText;

generate();

};

});

button.onclick=generate;

function generate(){

const prompt=input.value.trim();

if(prompt===""){

output.innerHTML="<h3>Please enter a prompt.</h3>";

return;

}

output.innerHTML=`
<h2 style="color:#00C805;">AI Output</h2>

<p><b>Prompt</b></p>

<p>${prompt}</p>

<hr style="margin:20px 0;border-color:#222;">

<h3>Token Name</h3>

<p>Shadow Cloak</p>

<h3>Ticker</h3>

<p>$SCLOAK</p>

<h3>Description</h3>

<p>An AI-powered meme token built for Robinhood Chain builders.</p>

<h3>Roadmap</h3>

<p>
Phase 1 • Build<br>
Phase 2 • Community<br>
Phase 3 • AI Tools<br>
Phase 4 • Ecosystem
</p>

`;

}
