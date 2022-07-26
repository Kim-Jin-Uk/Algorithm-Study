var mergeTwoLists = function(list1, list2) {
    // list1에 원소가 없거나 값이 list2보다 클때 서로 바꿔준다
    if(list1 === null || (list2 !== null && list1.val > list2.val)){
        const l1 = list1
        list1 = list2
        list2 = l1
    }
    // 작은 수부터 순차적으로 넣어준다
    if(list1 !== null){
        list1.next = mergeTwoLists(list1.next,list2)
    }
    return list1
};