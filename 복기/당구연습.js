function solution(m, n, startX, startY, balls) {
  const calcMinDistance = ([endX, endY]) => {
    let distance = Infinity;
    // 상, 하, 좌, 우
    if (!(startX === endX && endY >= startY))
      distance = Math.min(
        distance,
        (2 * n - endY - startY) ** 2 + (endX - startX) ** 2
      );

    if (!(startX === endX && endY <= startY))
      distance = Math.min(
        distance,
        (startY + endY) ** 2 + (endX - startX) ** 2
      );

    if (!(startY === endY && endX <= startX))
      distance = Math.min(
        distance,
        (startY - endY) ** 2 + (endX + startX) ** 2
      );

    if (!(startY === endY && endX >= startX))
      distance = Math.min(
        distance,
        (startY - endY) ** 2 + (2 * m - endX - startX) ** 2
      );
    // 대각선
    const slopeLB = (endY / endX) * (startY / startX);
    if (slopeLB === 1)
      distance = Math.min(
        distance,
        (startY + endY) ** 2 + (startX + endX) ** 2
      );

    const slopeRT = ((n - endY) / (m - endX)) * ((n - startY) / (m - startX));
    if (slopeRT === 1)
      distance = Math.min(
        distance,
        (2 * n - startX - startY) ** 2 + (2 * m - endX - endY) ** 2
      );

    const slopeLT = ((n - startY) / startX) * ((n - endY) / endX);
    if (slopeLT === 1)
      distance = Math.min(
        distance,
        (2 * n - endY - startY) ** 2 + (endX + startX) ** 2
      );

    const slopeRB = (startY / (m - startX)) * (endY / (m - endX));
    if (slopeRB === 1)
      distance = Math.min(
        distance,
        (2 * m - endX - startX) ** 2 + (endY + startY) ** 2
      );

    return distance;
  };
  return balls.map((ball) => calcMinDistance(ball));
}
