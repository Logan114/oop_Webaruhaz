export default class TSor{
    #termekOBJ={}
    #szuloElem;
    #sorElem;
    #torlesElem;
    constructor(termekOBJ, szuloElem){
        this.#termekOBJ = termekOBJ;
        this.#szuloElem = szuloElem;
        this.#sorokLetrehozasa();
        this.#torlesElem = this.#szuloElem.children("tr:last-child").children("td").children(".torol")
        this.#torlesElem.on("click",()=>{
            this.#trigger("torol")
        })
    }
    #trigger(esemenynev){
        const e = new CustomEvent(esemenynev,{detail:this.#termekOBJ.id})
        window.dispatchEvent(e)
    }
    #sorokLetrehozasa(){
        let txt=`<tr>`
        for (const key in this.#termekOBJ) {
                txt +=`<td>${this.#termekOBJ[key]}</td>`     

        }
        txt +=`<td><button class="torol"> torol </button>`
        txt +=`</tr>`
        this.#szuloElem.append(txt);
    }
}