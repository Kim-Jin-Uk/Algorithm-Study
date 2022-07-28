class MyStack {
    constructor() {
        this.stack = []
        this.push = function(data){
            this.stack.push(data)
        }
        this.pop = function(){
            return this.stack.pop()
        }
        this.top = function(){
            return this.stack[this.stack.length-1]
        }
        this.empty = function(){
            return this.stack.length === 0
        }
    }
}