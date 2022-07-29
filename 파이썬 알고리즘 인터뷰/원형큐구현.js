class MyCircularQueue {
    constructor(k){
        // 큐로 구현
        this.queue = []
        // 최대 길이 초기화
        this.length = k

        this.enQueue = function(data){
             if(this.queue.length < this.length){
                 this.queue.push(data)
                 return true
             }else return false
        }
        this.deQueue = function(){
            if(this.queue.length){
                this.queue.shift()
                return true
            }else return false
        }
        this.Front = function(){
            if(this.queue.length){
                return this.queue[0]
            }else return -1
        }
        this.Rear = function(){
            if(this.queue.length){
                return this.queue[this.queue.length-1]
            }else return -1
        }
        this.isEmpty = function(){
            return this.queue.length === 0
        }
        this.isFull = function(){
            return this.queue.length === this.length
        }
    }
}