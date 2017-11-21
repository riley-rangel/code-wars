function Xbonacci([ ...signature ], n) {
  if (n === 0) return []
  if (signature.length >= n) {
    return signature.slice(0, n)
  }
  const x = signature.length
  while (signature.length < n) {
    signature.push(signature.slice(-x).reduce((sum, num) => sum + num))
  }
  return signature
}

console.log(Xbonacci([ 1, 1 ], 10))
console.log(Xbonacci([ 0, 0, 0, 0, 1 ], 10))
