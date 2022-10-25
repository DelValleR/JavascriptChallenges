//Given an array of integers, find the pair of adjacent
//elements that has the largest product and return that product.

function solution(inputArray) {
  let max = -Infinity; //se debe inicializar en menos infinito para garantizar que funcione en operaciones negativas
  for (let i = 1; i < inputArray.length; i++) {
    max = Math.max(inputArray[i] * inputArray[i - 1], max); //Math.max() entrega el numero mayor
  }

  return max;
}

console.log(solution([3, 6, -2, -5, 7, 3]));

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.
