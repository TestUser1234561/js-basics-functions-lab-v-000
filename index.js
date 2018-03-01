// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  if (n < 43) {
    return (43 - n) + 1
  } else {
    return (n - 43) + 1
  }
}
