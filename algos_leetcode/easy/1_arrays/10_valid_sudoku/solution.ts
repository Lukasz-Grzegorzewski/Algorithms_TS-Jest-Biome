export function validSudoku(board: string[][]): boolean {
  type separatedDateType = {
    horizontals: string[][];
    verticals: string[][];
    squares: string[][];
  };

  const separatedData: separatedDateType = {
    horizontals: [[], [], [], [], [], [], [], [], []],
    verticals: [[], [], [], [], [], [], [], [], []],
    squares: [[], [], [], [], [], [], [], [], []],
  };

  for (let i = 0; i < board.length; i++) {
    const innerArray = board[i];

    for (let j = 0; j < innerArray.length; j++) {
      const element = innerArray[j];
      const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (
        element !== '.' &&
        (separatedData.horizontals[i].includes(element) ||
          separatedData.verticals[j].includes(element) ||
          separatedData.squares[squareIndex].includes(element))
      )
        return false;

      separatedData.horizontals[i].push(element);
      separatedData.verticals[j].push(element);
      separatedData.squares[squareIndex].push(element);
    }
  }
  return true;
}
