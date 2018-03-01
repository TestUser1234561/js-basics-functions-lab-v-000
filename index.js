// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  if (n < 43) {
    return 43 - n
  } else if (n > 43) {
    return n - 43
  } else {
    return 1
  }
}
