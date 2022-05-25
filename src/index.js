import LineDelimiters from './classes/line-delimiters'
import Events from './classes/events'
import States from './classes/states'
import DataConverter from './classes/data-converter'
import Notifier from './classes/notifier'

const lineDelimiters = new LineDelimiters(Events, States, DataConverter)
const { runDebugger } = new States()
const notifier = new Notifier()

let isInitiated = false

document.addEventListener('keypress', ({ key }) => {
  if (key === ']' || key === 'c' || key === 'd' || key === 't') {
    runDebugger[0] = key === ']' ? !runDebugger[0] : runDebugger[0]
    runDebugger[1] = key === 'c' ? !runDebugger[1] : runDebugger[1]
    runDebugger[2] = key === 'd' ? !runDebugger[2] : runDebugger[2]
    runDebugger[3] = key === 't' ? !runDebugger[3] : runDebugger[3]

    if (document.getElementById('notifier') === null) {
      notifier.createNotifier()
    }

    if (!runDebugger.includes(false) && !isInitiated) {
      lineDelimiters.init()
      notifier.showNotifier('CSS Debugger enabled')
      isInitiated = true
    }
    if (!runDebugger.includes(true) && isInitiated) {
      lineDelimiters.disable()
      notifier.showNotifier('CSS Debugger disabled')
      isInitiated = false
    }
  }
})
