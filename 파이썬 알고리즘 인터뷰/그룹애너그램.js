var groupAnagrams = function(strs) {
    const answer = []
    const graph = {}
    for(const str of strs){
        const key = str.split('').sort().join('')
        graph[key] = graph[key] || []
        graph[key].push(str)
    }
    for(const key of Object.keys(graph)){
        answer.push(graph[key])
    }
    return answer
};

console.log(groupAnagrams(
    ["eat","tea","tan","ate","nat","bat"]
))