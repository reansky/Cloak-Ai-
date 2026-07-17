const input = document.getElementById("prompt");
const sendBtn = document.getElementById("sendBtn");
const response = document.getElementById("response");

const replies = {
  "create token":
    "🪙 Token Idea\n\nName: Shadow Hood\nTicker: $SHDW\n\nA stealth-powered memecoin built for Robinhood Chain.",

  "whitepaper":
    "📄 Whitepaper\n\nMission:\nBuild a fun, community-driven AI ecosystem on Robinhood Chain.\n\nUtility:\nAI tools, branding and launch assistant.",

  "roadmap":
    "🗺️ Roadmap\n\nPhase 1 - Branding\nPhase 2 - Community\nPhase 3 - AI Tools\nPhase 4 - Ecosystem Expansion",

  "brand":
    "🎨 Brand\n\nPrimary Color: Robinhood Green\nSecondary: Black\nStyle: Minimal • AI • Futuristic",

  "x thread":
    "🐦 X Thread\n\n🚀 Introducing Cloak AI.\nThe AI Workspace for Robinhood Chain builders.\nBuild Smarter. Launch Faster.",

  "checklist":
    "✅ Launch Checklist\n\n• Logo\n• Website\n• Social Media\n• Token Metadata\n• Community\n• Launch"
};

function runPrompt() {
  const text = input.value.trim().toLowerCase();

  if (!text) {
    response.innerHTML = "Please enter a prompt.";
    return;
  }

  let found = false;

  Object.keys(replies).forEach((key) => {
    if (text.includes(key)) {
      response.innerHTML = replies[key].replace(/\n/g, "<br>");
      found = true;
    }
  });

  if (!found) {
    response.innerHTML =
      "🤖 Cloak AI is ready. AI integration will be added in the next version.";
  }
}

sendBtn.addEventListener("click", runPrompt);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    runPrompt();
  }
});
