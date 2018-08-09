let isPressed = false
let initPosX = 0
let initPosY = 0
let currPosX = 0
let currPosY = 0
let elem

var onDown = (e) => {
  isPressed = true
  initPosX = e.clientX
  initPosY = e.clientY
}
var onMove = (e) => {
  if (isPressed) {
    var w = elem.clientWidth
    var h = elem.clientHeight
    let dx = currPosX + initPosX - e.clientX
    let dy = currPosY + initPosY - e.clientY
    elem.setAttribute('viewBox', `${dx} ${dy} ${w} ${h}`)
  }
}
var onUp = (e) => {
  isPressed = false
  currPosX = currPosX + initPosX - e.clientX
  currPosY = currPosY + initPosY - e.clientY
}

export default {
  inserted (el) {
    elem = el
    el.addEventListener('mousedown', onDown)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseup', onUp)
  },
  unbind (el) {
    el.removeEventListener('mousedown', onDown)
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseup', onUp)
  }
}

// import Vue from 'vue'
// global export
// export default Vue.directive('svg-drag-viewbox', dir)

// to import it in ES6:
// import myDir from './SvgDragViewBox.js'
// export default{
//     directives:{
//         'my-dir': myDir
//     }
// }
