// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  if (n < 43) {
    return (43 - n) - 1
  } else {
    return (n - 43) + 1
  }
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n) * 264
}


function distanceTravelledInFeet(a, b) {
  if(a > b) {
    return (a - b) * 256
  } else {
    return (b - a) * 256
  }
}
