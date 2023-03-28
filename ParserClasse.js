class Parser{
    constructor(motif){
        this._motif = motif;
    }
    parse(phrase){
        const tab = phrase.split(this._motif);
        return tab.filter(Number);
    }
    str(){
        const numberspace = this.parse(phrase);
        const number = numberspace.map(el => el.trim());
        return number
    }
    
    get motif(){
        return this._motif;
    }
    set motif(motif){
        this._motif = motif;
    }
}
const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007'
const p = new Parser(':');
p.parse(phrase);
console.log(p.str());