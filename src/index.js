import Launcher from './launcher'
import { DataConverter, ElementBringer, Notifier } from './utils'
import Enabler from './triggers/enabler'
import Disabler from './triggers/disabler'
import Events from './executors/events'
import { colors } from './constants/line-colors.json'

const launcher = new Launcher(DataConverter, Enabler, Disabler, ElementBringer, Events, colors)
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
    launcher.enable()
    notifier.showNotifier('CSS Debugger enabled')
    isInitiated = true
  }

  if (pressedKeys === '' && isInitiated) {
    launcher.disable()
    notifier.showNotifier('CSS Debugger disabled')
    isInitiated = false
  }
})
