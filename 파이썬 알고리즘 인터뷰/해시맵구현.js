class MyHashMap {
    constructor(){
        this.map = {}
    }
    put(key,value){
        this.map[key] = value
    }
    get(key){
        return this.map[key] !== undefined ? this.map[key] : -1
    }
    remove(key){
        delete this.map[key]
    }
}