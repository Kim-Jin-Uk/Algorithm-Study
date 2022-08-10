var kClosest = function(points, k) {
    // 람다식을 이용하여 x^2+y^2의 오름차순으로 정렬
    points.sort(([x1,y1],[x2,y2])=>x1**2+y1**2-x2**2-y2**2)
    // k개까지의 부분배열 반환
    return points.slice(0,k)
}