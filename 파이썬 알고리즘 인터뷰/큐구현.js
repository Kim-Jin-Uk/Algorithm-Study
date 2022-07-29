class MyQueue {
    constructor(){
        this.queue = []
        this.push = function(data){
            this.queue.push(data)
        }
        this.pop = function(){
            return this.queue.shift()
        }
        this.peek = function(){
            return this.queue[0]
        }
        this.empty = function(){
            return this.queue.length === 0
        }
    }
    
}