import LineDelimiters from './classes/line-delimiters'
import Events from './classes/events'
import States from './classes/states'
import DataConverter from './classes/data-converter'

const lineDelimiters = new LineDelimiters(Events, States, DataConverter)
const { runDebugger } = new States()

document.addEventListener('keypress', ({ key }) => {
  if (key === ']' || key === 'c' || key === 'd' || key === 't') {
    runDebugger[0] = key === ']' ? !runDebugger[0] : runDebugger[0]
    runDebugger[1] = key === 'c' ? !runDebugger[1] : runDebugger[1]
    runDebugger[2] = key === 'd' ? !runDebugger[2] : runDebugger[2]
    runDebugger[3] = key === 't' ? !runDebugger[3] : runDebugger[3]

    if (!runDebugger.includes(false)) {
      lineDelimiters.init()
    }
    if (!runDebugger.includes(true)) {
      lineDelimiters.disable()
    }
  }
})
