
const debounce = {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  }
}

if (typeof exports === 'object') {
  module.exports = debounce
} else if (typeof define === 'function' && define.amd) {
  define([], function () {
    return debounce
  })
}
