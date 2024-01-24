class MarkovMachine {
    //Lets build the machine

    constructor(text) {
        let words = text.split(/[ \r\n]+/);
        this.words = words.filter(c => c !== "");
        this.makeChains();
    }

    makeChains() {
        let chains = new Map();

        for (let i = 0; i < this.words.length - 1; i += 1) {
            let bigram = this.words[i] + " " + this.words[ i + 1];
            let nextWord = this.words[i + 2] || null;

            if (chains.has(bigram)) chains.get(bigram).push(nextWord);
            else chains.set(bigram, [nextWord]);
        }

        this.chains = chains;
    }


    choice



}