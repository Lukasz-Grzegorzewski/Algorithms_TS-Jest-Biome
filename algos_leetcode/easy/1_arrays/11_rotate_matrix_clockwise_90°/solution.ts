export function rotateMatrix(matrix: number[][]): number[][] {
  /*let n = matrix[0].length;
  const FRAME_TURNS = Math.floor(n / 2);
  for (let x = 0; x < FRAME_TURNS; x++) {
    const countIterations = n - 1 - x;
    for (let y = x; y < countIterations; y++) {
      let currentX = x;
      let currentY = y;
      let tempBefore = matrix[n - 1 - currentY][currentX];
      for (let z = 0; z < 4; z++) {
        if (z === 3) matrix[currentX][currentY] = tempBefore;
        else {
          const tempCurrent = matrix[currentX][currentY];
          matrix[currentX][currentY] = tempBefore;
          const tempCurrentX = currentX;
          currentX = currentY;
          currentY = n - 1 - tempCurrentX;
          tempBefore = tempCurrent;
        }
      }
    }
  }*/

  const n = matrix[0].length

  for (let x = 0; x < n; x++) {
    for(let y = x + 1; y < n; y++) {
      [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]]
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse()
  }

  return matrix;
}
