class Node {
    constructor(){
        this.word = false
        this.childs = {}
    }
}
class Trie {
    constructor(value){
        this.root = new Node()
        this.insert = function(word){
            let node = this.root
            for(const char of word){
                node.childs[char] = node.childs[char] || new Node()
                node = node.childs[char]
            }
            node.word = true
        }
        this.search = function(word){
            let node = this.root
            for(const char of word){
                if(!(char in node.childs)) return false
                node = node.childs[char]
            }
            return node.word
        }
        this.startsWith = function(prefix){
            let node = this.root
            for(const char of prefix){
                if(!(char in node.childs)) return false
                node = node.childs[char]
            }
            return true
        }
    }
    
}
const t = new Trie()
t.insert('apple')