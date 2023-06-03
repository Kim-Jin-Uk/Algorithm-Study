// Trie 클래스 정의
class Trie {
  constructor() {
    this.child = {};
    this.sum = 0; // 메모이제이션 사용
  }

  // Trie에 단어를 삽입
  insert(word) {
    let curr = this;
    this.sum++; // 현재 노드를 포함한 이후 노드들의 총 단어 개수를 갱신
    for (const char of word) {
      if (!curr.child[char])
        // char 문자를 가진 자식 노드가 없으면 새로운 Trie 생성
        curr.child[char] = new Trie();
      curr = curr.child[char];
      curr.sum++; // 단어 개수를 갱신
    }
  }

  // Trie에서 쿼리에 해당하는 단어 개수를 반환
  find(query) {
    let curr = this;
    for (const char of query) {
      // 문자가 ?이면 이후 노드들의 총 단어 개수를 반환
      if (char === "?") return curr.sum;
      // 자식 노드 중 char 문자를 가진 노드가 없으면 0 반환
      else if (!curr.child[char]) return 0;
      curr = curr.child[char];
    }
  }
}

function solution(words, queries) {
  const trie = {}; // 길이가 같은 단어들을 저장하는 Trie 객체들을 저장하는 객체
  const reverse = {}; // 단어들을 뒤집어서 저장하는 Trie 객체들을 저장하는 객체
  // Trie 객체들 초기화
  for (const word of words) {
    const length = word.length;
    if (!trie[length]) {
      // 길이가 length인 단어들을 저장하는 Trie 객체가 없으면 새로 생성
      trie[length] = new Trie();
      reverse[length] = new Trie();
    }
    trie[length].insert(word);
    reverse[length].insert([...word].reverse().join(""));
  }
  return queries.map((query) => {
    const length = query.length;
    if (!trie[length]) return 0;
    if (query[0] === "?")
      return reverse[length].find([...query].reverse().join(""));
    return trie[length].find(query);
  });
}
