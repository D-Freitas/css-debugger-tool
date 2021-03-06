import '@/globals/custom-prototypes'

import { Launcher } from '@/launcher'
import { Events } from '@/executors'
import { colors } from '@/constants'
import { Enabler, Disabler } from '@/triggers'
import { ElementBringer, DataConverter, Notifier } from '@/utils'

const enabler = new Enabler(new ElementBringer(), new DataConverter(), new Events(), colors)
const disabler = new Disabler(new ElementBringer(), new DataConverter(), colors)
const launcher = new Launcher(enabler, disabler)
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
