// The best solution for 2023-08-06

/**
 * Explaination
 * We can use a hash table (JavaScript object) to keep track of elements we have encountered while iterating through the array.
 * For each element, we check if its complement (target - element) is present in the hash table.
 * If it is, then we have found a pair that adds up
 *
 * For the example provided (nums = [3, 2, 3], targetSum = 6):

The first element is 3, and its complement (target - element) is 6 - 3 = 3.

The numToIndexMap is empty at this point, so we add { 3: 0 } to the hash table, indicating that we encountered 3 at index 0.

The second element is 2, and its complement is 6 - 2 = 4.

The numToIndexMap does not have 4, so we add { 2: 1 } to the hash table, indicating that we encountered 2 at index 1.

The third element is 3, and its complement is 6 - 3 = 3.

The numToIndexMap has 3, so we found a valid pair. The pair's indices are { 0, 2 }, representing the elements 3 and 3 at indices 0 and 2, respectively.

The final output will be [ [0, 2] ], indicating that the elements at indices 0 and 2 (3 and 3) form a unique pair with the desired sum of 6.
 */
function twoSumOne(nums: number[], target: number): number[] {
  const result: number[] = [];
  const numToIndexMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndexMap[complement] !== undefined) {
      result.push(numToIndexMap[complement], i);
    }
    numToIndexMap[nums[i]] = i;
  }

  return result;
}

/////////////////////////
// Bad performance solution
function twoSumTs(nums: number[], target: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}
