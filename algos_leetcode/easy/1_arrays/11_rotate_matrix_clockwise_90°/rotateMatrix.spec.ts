import { describe, it, expect } from '@jest/globals';
import { rotateMatrix } from './rotateMatrix';

describe('Rotate a matrix clockwise by 90°', () => {
  it('should return matrix rotated clockwise by 90°', async () => {
    const matrix: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(rotateMatrix(matrix)).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it('should return matrix rotated clockwise by 90°', async () => {
    const matrix: number[][] = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    expect(rotateMatrix(matrix)).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  it('should return matrix rotated clockwise by 90°', async () => {
    const matrix: number[][] = [
      [2, 29, 20, 26, 16, 28],
      [12, 27, 9, 25, 13, 21],
      [32, 33, 32, 2, 28, 14],
      [13, 14, 32, 27, 22, 26],
      [33, 1, 20, 7, 21, 7],
      [4, 24, 1, 6, 32, 34],
    ];
    expect(rotateMatrix(matrix)).toEqual([
      [4, 33, 13, 32, 12, 2],
      [24, 1, 14, 33, 27, 29],
      [1, 20, 32, 32, 9, 20],
      [6, 7, 27, 2, 25, 26],
      [32, 21, 22, 28, 13, 16],
      [34, 7, 26, 14, 21, 28],
    ]);
  });
});
