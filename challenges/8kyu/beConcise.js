// Given this - refactor below 137 chars

// function describeAge(age) {
//   if (age <= 12) {
//     return "You're a(n) kid";
//   } else if (age >= 13 && age <= 17) {
//     return "You're a(n) teenager";
//   } else if (age >= 18 && age <= 64) {
//     return "You're a(n) adult";
//   } else {
//     return "You're a(n) elderly";
//   }
// }

const describeAge = a => `You're a(n) ${a < 13 ? 'kid' : a < 18 ? 'teenager' : a < 65 ? 'adult' : 'elderly'}`
// 110

console.log(describeAge(10)) // kid
console.log(describeAge(13)) // teenager
console.log(describeAge(18)) // adult
console.log(describeAge(64)) // adult
console.log(describeAge(65)) // elderly
console.log(describeAge()) // elderly
