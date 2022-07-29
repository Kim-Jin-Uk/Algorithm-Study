// 맥스힙 구현
class Heap {
    constructor() {
        this.heap = []
    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    push(value) {
        this.heap.push(value)
        let idx = this.heap.length-1
        let parent = Math.floor((idx-1)/2)
        while(this.heap[parent] < value) {
            this.swap(parent, idx)
            idx = parent
            parent = Math.floor((idx-1)/2)
        }
    }
    pop() {
        const lastIdx = this.heap.length-1
        let idx = 0
        this.swap(0, lastIdx)
        let value = this.heap.pop()

        while(idx < lastIdx) {
            let leftChildIdx = idx*2+1
            let rightChildIdx = idx*2+2
            if(leftChildIdx >= lastIdx) {
                break
            } else if(rightChildIdx >= lastIdx)  {
                if(this.heap[idx] < this.heap[leftChildIdx]) {
                    this.swap(idx, leftChildIdx)
                    idx = leftChildIdx
                } else {
                    break
                }
            } else {
                if(this.heap[leftChildIdx] > this.heap[idx] && this.heap[rightChildIdx] > this.heap[idx]) {
                    if(this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
                        this.swap(idx, leftChildIdx)
                        idx = leftChildIdx
                    } else {
                        this.swap(idx,rightChildIdx)
                        idx = rightChildIdx
                    }
                } else if(this.heap[leftChildIdx] > this.heap[idx]) {
                    this.swap(leftChildIdx, idx)
                    idx = leftChildIdx
                } else if(this.heap[rightChildIdx] > this.heap[idx]) {
                    this.swap(rightChildIdx, idx)
                    idx = rightChildIdx
                } else {
                    break
                }
            }
        }
        return value
    }
}

var mergeKLists = function(lists) {
    const heap = new Heap()
    let length = 0
    // 힙에 차곡차곡 넣어주기
    for(let list of lists){
        while(list){
            heap.push(list.val)
            list = list.next
            length ++
        }
    }
    //원소가없는 경우 처리
    if(length === 0) return null
    let answer = new ListNode(heap.pop())
    for(let c = 0; c < length-1; c++){
        answer.next = {...answer}
        answer.val = heap.pop()
    }
    return answer
}