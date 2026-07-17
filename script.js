const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const cards = document.querySelectorAll(".card");
const output = document.getElementById("ai-output");

const templates = {
  token: (theme) => `
<h2>🚀 Token Generator</h2>

<h3>Token Name</h3>
<p>${theme} Coin</p>

<h3>Ticker</h3>
<p>$${theme.replace(/\s+/g, "").substring(0,6).toUpperCase()}</p>

<h3>Description</h3>
<p>A community-driven meme token inspired by ${theme}, built for Robinhood Chain.</p>

<h3>Narrative</h3>
<p>${theme} brings together builders, traders, and meme lovers into one growing community.</p>

<h3>Roadmap</h3>
<p>
Phase 1 - Launch<br>
Phase 2 - Community Growth<br>
Phase 3 - Marketing Campaign<br>
Phase 4 - Ecosystem Expansion
</p>
`,

  whitepaper: `
<h2>📄 Whitepaper</h2>
<p>Professional whitepaper generation will be available in the next update.</p>
`,

  roadmap: `
<h2>🗺 Roadmap</h2>
<p>Roadmap generator will be available soon.</p>
`,

  brand: `
<h2>🎨 Brand Kit</h2>
<p>Brand generator will be available soon.</p>
`,

  xthread: `
<h2>🐦 X Thread</h2>
<p>X Thread generator will be available soon.</p>
`,

  checklist: `
<h2>✅ Launch Checklist</h2>
<ul>
<li>Create Website</li>
<li>Create X Account</li>
<li>Create Telegram</li>
<li>Deploy Token</li>
<li>Launch Community</li>
</ul>
`
};

button.onclick = generate;

input.addEventListener("keydown", function(e){
  if(e.key==="Enter"){
    generate();
  }
});

cards.forEach(card=>{

  card.onclick=()=>{

    const title=card.querySelector("h3").innerText;

    input.value=title;

    generate(title);

  }

});

function generate(type=""){

  const value=input.value.trim();

  if(value===""){

    output.innerHTML="<h3>Please enter a prompt.</h3>";

    return;

  }

  const lower=value.toLowerCase();

  if(lower.includes("white")){

    output.innerHTML=templates.whitepaper;

    return;

  }

  if(lower.includes("road")){

    output.innerHTML=templates.roadmap;

    return;

  }

  if(lower.includes("brand")){

    output.innerHTML=templates.brand;

    return;

  }

  if(lower.includes("thread")){

    output.innerHTML=templates.xthread;

    return;

  }

  if(lower.includes("check")){

    output.innerHTML=templates.checklist;

    return;

  }

  output.innerHTML=templates.token(value);

}
