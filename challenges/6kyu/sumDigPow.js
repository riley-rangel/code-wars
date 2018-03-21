function sumDigPow(a, b) {
  const [lower, upper] = [a, b].sort((a, b) => a - b)
  const nums = []

  for (let n = lower; n <= upper; n++) {
    const digPowSum = String(n).split('')
      .map((digStr, i) => Math.pow(Number(digStr), i + 1))
      .reduce((sum, num) => sum + num)

    if (n === digPowSum) nums.push(digPowSum)
  }

  return nums.sort((a, b) => a - b)
}

function sumDigPow2(a, b) {
  const [lower, upper] = [a, b].sort((a, b) => a - b)

  return Array
    .from(new Array(upper - lower), (_, i) => i + lower)
    .filter((num, i) => {
      return num === String(num).split('')
        .map((digStr, i) => Math.pow(Number(digStr), i + 1))
        .reduce((sum, num) => sum + num)
    })
    .sort((a, b) => a - b)
}

const test1 = sumDigPow(1, 100)
const test2 = sumDigPow2(1, 100)
console.log(test1, test2)
