const app = "I don't do much."

function moveDodgerLeft() {
  var dodger = document.getElementById('dodger')
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var dodger = document.getElementById('dodger')
  var rightPos = dodger.style.left.replace('px', '')
  var rightPosNum = parseInt(rightPos, 10)
 
  if (rightPosNum > 0) {
    dodger.style.right = `${rightPosNum - 1}px`
  }
}