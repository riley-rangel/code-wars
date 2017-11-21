function findMissingLetter(array) {
  const [ head, ...tail ] = array
  return tail[0].charCodeAt() - head.charCodeAt() > 1
    ? String.fromCharCode(tail[0].charCodeAt() - 1)
    : findMissingLetter(tail)
}

const arr1 = [ 'a', 'b', 'c', 'd', 'f' ]
const arr2 = [ 'O', 'Q', 'R', 'S' ]

console.log(findMissingLetter(arr1), findMissingLetter(arr2))
