/* =====================================================
   THE CLOAK TERMINAL
   Robinhood Cloak $RHC
   Version : 1.0.0
===================================================== */


window.Terminal = {

    version: "1.0.0",

    initialized: false,

    isOpen: false,

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

        "Loading Security Layer...",

        "",

        "SYSTEM ONLINE",

        "",

        "Welcome, Cloaked One.",

        "",

        "Type 'help' to begin.",

        ""

    ],



    init(){

        if(this.initialized) return;


        this.cache();

        this.events();

        this.registerCommands();


        this.initialized = true;


        console.log(
            "✅ The Cloak Terminal Online"
        );

    },



    cache(){


        this.elements.overlay =
            document.getElementById(
                "terminal-overlay"
            );


        this.elements.output =
            document.getElementById(
                "terminal-output"
            );


        this.elements.input =
            document.getElementById(
                "terminal-command"
            );


        this.elements.openButton =
            document.getElementById(
                "terminal-toggle"
            );


        this.elements.closeButton =
            document.getElementById(
                "terminal-close"
            );


    },



    events(){


        if(this.elements.openButton){

            this.elements.openButton
            .addEventListener(
                "click",
                ()=>{
                    this.open();
                }
            );

        }



        if(this.elements.closeButton){

            this.elements.closeButton
            .addEventListener(
                "click",
                ()=>{
                    this.close();
                }
            );

        }



        if(this.elements.input){

            this.elements.input
            .addEventListener(
                "keydown",
                (e)=>{
                    this.keydown(e);
                }
            );

        }


    },


    open(){


        if(!this.elements.overlay)
            return;


        this.elements.overlay
        .classList
        .add("active");


        this.isOpen = true;


        this.boot();


    },


    close(){


        if(!this.elements.overlay)
            return;


        this.elements.overlay
        .classList
        .remove("active");


        this.isOpen = false;


    },


    boot(){


        if(!this.elements.output)
            return;


        this.elements.output.textContent="";


        let i = 0;


        const loading = ()=>{


            if(i >= this.bootLines.length){


                if(this.elements.input){

                    this.elements.input.focus();

                }


                return;

            }


            this.print(
                this.bootLines[i]
            );


            i++;


            setTimeout(
                loading,
                100
            );


        };


        loading();


    },


    print(text=""){


        if(!this.elements.output)
            return;


        this.elements.output.textContent +=
            text + "\n";


        this.elements.output.scrollTop =
            this.elements.output.scrollHeight;


    },

    keydown(e){


        if(e.key === "Enter"){


            const value =
                this.elements.input.value.trim();



            if(value === "")
                return;



            this.history.push(value);



            this.historyIndex =
                this.history.length;



            this.print(
                "> " + value
            );



            this.execute(value);



            this.elements.input.value = "";



            return;

        }




        if(e.key === "ArrowUp"){


            if(this.history.length === 0)
                return;



            this.historyIndex--;



            if(this.historyIndex < 0){

                this.historyIndex = 0;

            }



            this.elements.input.value =
                this.history[
                    this.historyIndex
                ];



            e.preventDefault();



            return;

        }




        if(e.key === "ArrowDown"){


            if(this.history.length === 0)
                return;



            this.historyIndex++;



            if(
                this.historyIndex >=
                this.history.length
            ){


                this.historyIndex =
                    this.history.length;



                this.elements.input.value = "";



                return;

            }



            this.elements.input.value =
                this.history[
                    this.historyIndex
                ];



            e.preventDefault();


        }


    },




    execute(command){


        const cmd =
            command
            .toLowerCase()
            .trim();



        if(this.commands[cmd]){


            this.commands[cmd]();



            return;


        }



        this.unknown(command);



    },




    unknown(command){


        this.print("");

        this.print(
            "Unknown command:"
        );


        this.print(
            command
        );


        this.print("");


        this.print(
            'Type "help" to view commands.'
        );


        this.print("");


    },

       registerCommands(){


        this.commands = {


            help: ()=>{


                this.print("");

                this.print(
                    "========== COMMAND LIST =========="
                );

                this.print("");

                this.print("help");
                this.print("about");
                this.print("roadmap");
                this.print("status");
                this.print("token");
                this.print("contract");
                this.print("market");
                this.print("clear");

                this.print("");


            },



            about: ()=>{


                this.print("");

                this.print(
                    "ROBINHOOD CLOAK"
                );

                this.print("");

                this.print(
                    "Ticker : $RHC"
                );

                this.print(
                    "Chain  : Robinhood Chain"
                );

                this.print(
                    "Version: 1.0.0"
                );

                this.print("");

                this.print(
                    "AI Terminal System Online"
                );

                this.print("");


            },



            roadmap: ()=>{


                this.print("");

                this.print(
                    "========== ROADMAP =========="
                );

                this.print("");

                this.print(
                    "[✓] Website"
                );

                this.print(
                    "[✓] Terminal"
                );

                this.print(
                    "[✓] AI System"
                );

                this.print(
                    "[ ] Live Market"
                );

                this.print(
                    "[ ] Dashboard"
                );

                this.print("");

            },



            status: ()=>{


                this.print("");

                this.print(
                    "SYSTEM STATUS"
                );

                this.print("");

                this.print(
                    "Website  : ONLINE"
                );

                this.print(
                    "Terminal : ONLINE"
                );

                this.print(
                    "AI       : READY"
                );

                this.print(
                    "Network  : READY"
                );

                this.print("");

            },



            token: ()=>{


                this.print("");

                this.print(
                    "TOKEN INFORMATION"
                );

                this.print("");

                this.print(
                    "Name   : Robinhood Cloak"
                );

                this.print(
                    "Ticker : $RHC"
                );

                this.print(
                    "Chain  : Robinhood Chain"
                );

                this.print("");

            },



            contract: ()=>{


                this.print("");

                this.print(
                    "CONTRACT"
                );

                this.print("");

                this.print(
                    "COMING SOON..."
                );

                this.print("");

            },



            market: ()=>{


                this.print("");

                this.print(
                    "MARKET MODULE"
                );

                this.print("");

                this.print(
                    "Live Market Integration Pending..."
                );

                this.print("");

            },



            clear: ()=>{


                this.elements.output.textContent = "";


            }


        };


    },

       ai(message){


        const text =
            message.toLowerCase();



        if(
            text.includes("hello") ||
            text.includes("hi")
        ){

            this.print("");

            this.print(
                "Cloak AI: Welcome, Cloaked One."
            );

            this.print("");

            return;

        }



        if(
            text.includes("price") ||
            text.includes("market")
        ){

            this.print("");

            this.print(
                "Cloak AI: Market module is preparing..."
            );

            this.print("");

            return;

        }



        if(
            text.includes("who are you")
        ){

            this.print("");

            this.print(
                "Cloak AI: I am the Robinhood Cloak Intelligence System."
            );

            this.print("");

            return;

        }



        this.print("");

        this.print(
            "Cloak AI: Command received."
        );

        this.print(
            "Try typing: help"
        );

        this.print("");


    }



};



document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        Terminal.init();

    }
);
