function solution(tickets) {
  const answer = [];
  const graph = {};
  for (let i of tickets) {
    graph[i[0]] = graph[i[0]] ? [...graph[i[0]], i[1]] : [i[1]];
  }

  const visit = ["ICN"];
  function move(start, tickets, visit) {
    if (tickets.length === 0) {
      answer.push(visit);
      return true;
    }
    for (const i of graph[start]) {
      for (const j of tickets) {
        if (j[0] === start && j[1] === i) {
          let startCheck = false;
          for (const k of tickets) {
            if (k[0] === i || tickets.length === 1) {
              startCheck = true;
              break;
            }
          }
          if (startCheck) {
            let check = true;
            const ticketList = tickets.filter((v) => {
              if (v[0] === start && v[1] === i && check) {
                check = false;
                return false;
              }
              return true;
            });
            move(i, ticketList, [...visit, i]);
          }
        }
      }
    }
  }

  move("ICN", [...tickets], [...visit]);
  answer.sort();

  return answer[0];
}
