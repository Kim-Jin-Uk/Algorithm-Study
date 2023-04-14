function solution(word, pages) {
  const pageMap = new Map();
  word = word.toLowerCase();

  pages.forEach((page, idx) => {
    // origin url 추출
    const [_, url] = page.match(
      /<meta property="og:url" content="([^"]+)"\/>/i
    );
    // basic 점수 계산
    const tags = page.match(/<[^>]+>/gi);
    const basic = tags
      .reduce((raw, tag) => raw.replace(tag, ""), page)
      .split(/[^a-zA-Z]/)
      .filter((w) => w.toLowerCase() === word).length;
    // 외부 url 갱신
    const outUrls = [];
    tags.forEach((tag) => {
      const result = tag.match(/<a href="([^"]+)">/i);
      if (result) outUrls.push(result[1]);
    });

    pageMap.set(url, { idx, basic, outUrls, link: 0 });
  });

  // link 점수 계산
  for (const [, value] of pageMap) {
    let { basic, outUrls } = value;
    const linkScore = basic / outUrls.length;
    for (const outUrl of outUrls) {
      if (!pageMap.has(outUrl)) continue;
      const { idx, basic, outUrls, link } = pageMap.get(outUrl);
      pageMap.set(outUrl, { idx, basic, outUrls, link: link + linkScore });
    }
  }
  // 순회하며 최대값 계산 sort는 nlogn이니 순회 한번으로 해결
  let highScore = 0;
  let index = 0;
  for (const [, value] of pageMap) {
    let { basic, link, idx } = value;
    if (highScore < basic + link) {
      highScore = basic + link;
      index = idx;
    } else if (highScore === basic + link) index = Math.min(index, idx);
  }
  return index;
}
