const input = document.querySelector(".search input");
const button = document.querySelector(".search button");

const cards = document.querySelectorAll(".card");

button.addEventListener("click", generate);

input.addEventListener("keydown", function(e){

    if(e.key==="Enter"){
        generate();
    }

});

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        input.value=card.querySelector("h3").innerText;

        generate();

    });

});

function generate(){

    const prompt=input.value.trim();

    if(prompt===""){

        alert("Please enter a prompt.");

        return;

    }

    button.innerHTML="Generating...";

    button.disabled=true;

    setTimeout(()=>{

        button.innerHTML="Generate";

        button.disabled=false;

        alert(
`Prompt:
${prompt}

🚀 AI Integration Coming Soon

Next version will connect to a real AI model and generate professional crypto content automatically.`);

    },1200);

}
