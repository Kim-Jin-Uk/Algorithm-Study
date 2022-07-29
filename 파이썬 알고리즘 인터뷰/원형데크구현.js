class MyCircularDeque {
    constructor(k){
        this.deque = []
        this.length = k
        this.insertFront = function(data){
            if(this.deque.length < this.length){
                this.deque = [data].concat(this.deque)
                return true
            }else return false
        }
        this.insertLast = function(data){
            if(this.deque.length < this.length){
                this.deque.push(data)
                return true
            }else return false
        }
        this.deleteFront = function(){
            if(this.deque.length){
                this.deque.shift()
                return true
            }else return false
        }
         this.deleteLast = function(){
            if(this.deque.length){
                this.deque.pop()
                return true
            }else return false
        }
        this.getFront = function(){
            if(this.deque.length){
                return this.deque[0]
            }else return -1
        }
        this.getRear = function(){
            if(this.deque.length){
                return this.deque[this.deque.length-1]
            }else return -1
        }
        this.isEmpty = function(){
            return this.deque.length === 0
        }
        this.isFull = function(){
            return this.deque.length === this.length
        }
    }
}