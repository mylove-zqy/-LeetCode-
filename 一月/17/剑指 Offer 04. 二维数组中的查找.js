/**
 * 
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
 * \每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

let matrix = [[1, 1]];

var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let height = matrix.length;
  let width = matrix[0] && matrix[0].length;

  let i = height - 1;
  let j = 0;
  while (i >= 0 && j < width) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++;
    }
  }
  return false;
};
console.log(findNumberIn2DArray(matrix, 0));
