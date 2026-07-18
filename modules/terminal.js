/* =====================================================
   THE CLOAK TERMINAL
   Version : 1.0.0
===================================================== */

window.Terminal = {

    version: "1.0.0",

    initialized: false,

    isOpen: false,

    isTyping: false,

    history: [],

    historyIndex: -1,

    commands: {},

    elements: {

        overlay: null,

        output: null,

        input: null,

        openButton: null,

        closeButton: null

    },

    bootLines: [

        "INITIALIZING ROBINHOOD CLOAK...",
        "",
        "Loading AI Engine...",
        "Loading Command Registry...",
        "Loading Market Module...",
        "Loading Security Layer...",
        "",
        "SYSTEM ONLINE",
        "",
        "Welcome, Cloaked One.",
        "",
        "Type 'help' to begin.",
        ""

    ],

    init() {

        if (this.initialized) return;

        this.cache();

        this.registerCommands();

        this.events();

        this.initialized = true;

        console.log("✅ The Cloak Terminal Ready");

    },

    cache() {

        this.elements.overlay = document.getElementById("terminal-overlay");

        this.elements.output = document.getElementById("terminal-output");

        this.elements.input = document.getElementById("terminal-command");

        this.elements.openButton = document.getElementById("terminal-toggle");

        this.elements.closeButton = document.getElementById("terminal-close");

    },

    events() {

        if (this.elements.openButton) {

            this.elements.openButton.addEventListener("click", () => {

                this.open();

            });

        }

        if (this.elements.closeButton) {

            this.elements.closeButton.addEventListener("click", () => {

                this.close();

            });

        }

        if (this.elements.input) {

            this.elements.input.addEventListener("keydown", (e) => {

                this.keydown(e);

            });

        }

    },

    open() {

        if (!this.elements.overlay) return;

        this.elements.overlay.classList.add("active");

        this.isOpen = true;

        this.boot();

    },

    close() {

        if (!this.elements.overlay) return;

        this.elements.overlay.classList.remove("active");

        this.isOpen = false;

    },

    boot() {

        if (!this.elements.output) return;

        this.elements.output.textContent = "";

        let index = 0;

        const next = () => {

            if (index >= this.bootLines.length) {

                if (this.elements.input) {

                    this.elements.input.focus();

                }

                return;

            }

            this.print(this.bootLines[index]);

            index++;

            setTimeout(next, 120);

        };

        next();

    },

    print(text = "") {

        this.elements.output.textContent += text + "\n";

        this.elements.output.scrollTop =
            this.elements.output.scrollHeight;

    },

    registerCommands() {

        this.commands = {};

    },

    keydown(e) {

        // PART 1B

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Terminal.init();

});

        if (e.key === "Enter") {

            const value = this.elements.input.value.trim();

            if (value === "") return;

            this.history.push(value);

            this.historyIndex = this.history.length;

            this.print("> " + value);

            this.execute(value);

            this.elements.input.value = "";

            return;

        }

        if (e.key === "ArrowUp") {

            if (this.history.length === 0) return;

            this.historyIndex--;

            if (this.historyIndex < 0) {

                this.historyIndex = 0;

            }

            this.elements.input.value =
                this.history[this.historyIndex];

            setTimeout(() => {

                this.elements.input.setSelectionRange(
                    this.elements.input.value.length,
                    this.elements.input.value.length
                );

            }, 0);

            e.preventDefault();

            return;

        }

        if (e.key === "ArrowDown") {

            if (this.history.length === 0) return;

            this.historyIndex++;

            if (this.historyIndex >= this.history.length) {

                this.historyIndex = this.history.length;

                this.elements.input.value = "";

                return;

            }

            this.elements.input.value =
                this.history[this.historyIndex];

            setTimeout(() => {

                this.elements.input.setSelectionRange(
                    this.elements.input.value.length,
                    this.elements.input.value.length
                );

            }, 0);

            e.preventDefault();

        }

    },

    execute(command) {

        const cmd = command.toLowerCase();

        if (this.commands[cmd]) {

            this.commands[cmd]();

            return;

        }

        this.unknown(command);

    },

    unknown(command) {

        this.print("");

        this.print("Unknown command:");

        this.print(command);

        this.print("");

        this.print('Type "help" to view available commands.');

        this.print("");

    },

registerCommands() {

    this.commands = {

        help: () => {

            this.print("");

            this.print("========== COMMAND LIST ==========");

            this.print("");

            this.print("help");

            this.print("about");

            this.print("roadmap");

            this.print("status");

            this.print("token");

            this.print("market");

            this.print("contract");

            this.print("website");

            this.print("telegram");

            this.print("x");

            this.print("clear");

            this.print("");

        },

        about: () => {

            this.print("");

            this.print("Robinhood Cloak");

            this.print("");

            this.print("Ticker : " + CONFIG.PROJECT.SYMBOL);

            this.print("Chain  : " + CONFIG.PROJECT.CHAIN);

            this.print("Version: " + CONFIG.PROJECT.VERSION);

            this.print("");

            this.print(CONFIG.AI.NAME);

            this.print("");

        },

        roadmap: () => {

            this.print("");

            this.print("ROADMAP");

            this.print("");

            this.print("[✓] Website");

            this.print("[✓] AI");

            this.print("[✓] Terminal");

            this.print("[ ] Live Market");

            this.print("[ ] Gemini AI");

            this.print("[ ] Dashboard");

            this.print("");

        },

        status: () => {

            this.print("");

            this.print("SYSTEM STATUS");

            this.print("");

            this.print("Website : ONLINE");

            this.print("AI      : READY");

            this.print("Market  : READY");

            this.print("Terminal: ONLINE");

            this.print("");

        },

        token: () => {

            this.print("");

            this.print("TOKEN");

            this.print("");

            this.print("Name   : " + CONFIG.PROJECT.NAME);

            this.print("Ticker : " + CONFIG.PROJECT.SYMBOL);

            this.print("Supply : " + CONFIG.TOKEN.SUPPLY);

            this.print("Tax    : " + CONFIG.TOKEN.TAX);

            this.print("");

        },

        contract: () => {

            this.print("");

            this.print("Contract");

            this.print("");

            this.print(CONFIG.TOKEN.CONTRACT);

            this.print("");

        },

        market: () => {

            this.print("");

            this.print("Market Module");

            this.print("");

            this.print("Coming Soon...");

            this.print("");

        },

        website: () => {

            if (CONFIG.LINKS.WEBSITE) {

                Utils.open(CONFIG.LINKS.WEBSITE);

            }

            this.print("");

            this.print("Opening Website...");

            this.print("");

        },

        telegram: () => {

            if (CONFIG.LINKS.TELEGRAM) {

                Utils.open(CONFIG.LINKS.TELEGRAM);

            }

            this.print("");

            this.print("Opening Telegram...");

            this.print("");

        },

        x: () => {

            if (CONFIG.LINKS.X) {

                Utils.open(CONFIG.LINKS.X);

            }

            this.print("");

            this.print("Opening X...");

            this.print("");

        },

        clear: () => {

            this.elements.output.textContent = "";

        }

    };

},

