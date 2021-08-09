// The GCD of two numbers must be a factor of their difference

// EX: 55, 35.  Diff = 55 - 35 = 20. So GCD must me factor of 20
// EX: 35, 20.  Diff = 35 % 20 = 15. So GCD must be factor of 15
// Ex: 20, 15.  Diff = 20 % 15 = 5. So GCD must be factor of 5
// EX: 15, 5.  Diff = 15 % 5 === 0. GCD must be 5

function GCD(num1, num2) {
  // make positive
  if (num1 < 0) { num1 *= -1 }
  if (num2 < 0) { num2 *= -1 }
  if (num1 > num2) {
    // using var for function scope not block
    var a = num1
    var b = num2
  } else {
    var a = num2
    var b = num1
  }
  let gcd
  let diff = a % b
  // will eventually terminate, even if just to 1.
  while (diff >= 1) {
    diff = a % b
    a = b
    b = diff
  }
  gcd = a
  return gcd
}

console.log(GCD(55, 35)) // return 5
console.log(GCD(35, 55)) // return 5
console.log(GCD(3, 5)) // return 1
console.log(GCD(-3, 5)) // return 1

