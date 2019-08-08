//O(n*k), n - length of array, k - length of largest number

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

export default function radixSort(arr, sortByKey, order) {
  let nums = arr.map(obj => obj[sortByKey] || 0);
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i][sortByKey] || 0, k);
      digitBuckets[digit].push(arr[i]);
    }

    (function flatten() {
      const cb = (bucket, current) => (arr = [] = bucket.concat(current));

      return order === "ASC"
        ? digitBuckets.reduce(cb)
        : digitBuckets.reduceRight(cb);
    })();
  }

  return arr;
}
