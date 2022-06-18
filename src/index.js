import LineDelimiters from './classes/line-delimiters'
import Events from './classes/events'
import DataConverter from './classes/data-converter'
import Notifier from './classes/notifier'

const lineDelimiters = new LineDelimiters(Events, DataConverter)
const notifier = new Notifier()

let isInitiated = false
let pressedKeys = ''

const notifierElement = document.getElementById('notifier')
if (notifierElement === null) notifier.createNotifier()

document.addEventListener('keypress', ({ key }) => {
  if ((!isInitiated && key === ']' && pressedKeys === '') ||
      (!isInitiated && key === 'c' && pressedKeys === ']') ||
      (!isInitiated && key === 'd' && pressedKeys === ']c') ||
      (!isInitiated && key === 't' && pressedKeys === ']cd')) {
    pressedKeys += key
  }

  if (key === ']' && pressedKeys === ']cdt') pressedKeys = pressedKeys.slice(0, -1)
  if (key === 'c' && pressedKeys === ']cd') pressedKeys = pressedKeys.slice(0, -1)
  if (key === 'd' && pressedKeys === ']c') pressedKeys = pressedKeys.slice(0, -1)
  if (key === 't' && pressedKeys === ']') pressedKeys = pressedKeys.slice(0, -1)

  if (pressedKeys === ']cdt' && !isInitiated) {
    lineDelimiters.enable()
    notifier.showNotifier('CSS Debugger enabled')
    isInitiated = true
  }

  if (pressedKeys === '' && isInitiated) {
    lineDelimiters.disable()
    notifier.showNotifier('CSS Debugger disabled')
    isInitiated = false
  }
})
