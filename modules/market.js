/* =====================================================
   LIVE MARKET MODULE
===================================================== */

window.Market = {

    async init() {

        this.renderFallback();

        if (CONFIG.MARKET.PAIR_ADDRESS !== "") {

            await this.fetch();

            setInterval(() => {

                this.fetch();

            }, CONFIG.MARKET.REFRESH);

        }

    },

    renderFallback() {

        this.set("price", CONFIG.MARKET.PRICE);
        this.set("marketcap", CONFIG.MARKET.MARKETCAP);
        this.set("liquidity", CONFIG.MARKET.LIQUIDITY);
        this.set("volume", CONFIG.MARKET.VOLUME);
        this.set("holders", CONFIG.MARKET.HOLDERS);

    },

    async fetch() {

        try {

            const res = await fetch(

                "https://api.dexscreener.com/latest/dex/pairs/robinhood/" +
                CONFIG.MARKET.PAIR_ADDRESS

            );

            const data = await res.json();

            const pair = data.pair;

            if (!pair) return;

            this.set("price", "$" + pair.priceUsd);

            this.set(
                "marketcap",
                "$" + Number(pair.fdv).toLocaleString()
            );

            this.set(
                "liquidity",
                "$" + Number(pair.liquidity.usd).toLocaleString()
            );

            this.set(
                "volume",
                "$" + Number(pair.volume.h24).toLocaleString()
            );

        } catch (err) {

            console.log("Market API Error", err);

        }

    },

    set(id, value) {

        const el = document.getElementById(id);

        if (el) {

            el.textContent = value;

        }

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Market.init();

});
