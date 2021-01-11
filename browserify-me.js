var jljDebounce = require('./jlj-debounce.js')

global.jljDebounce = jljDebounce

window.Vue && global.Vue.use(jljDebounce)
