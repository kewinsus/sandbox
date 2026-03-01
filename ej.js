
class Auto{
    
    #marca
    #año
    constructor(marca, año){
        this.#marca = marca
        this.#año = año
    }

     get marca(){
        return this.#marca
    }

    set marca(newMarca){
        this.#marca = newMarca
    }

    get año(){
        return this.#año
    }

    set año(newAño){
        this.#año = newAño
    }
}
 


let auto1 = new Auto("Nissan",2026)

console.log(auto1)
console.log(auto1.año)