import DataConverter from './classes/data-converter'
import LineDelimiters from './classes/line-delimiters'
import Events from './classes/events'
import { colors } from './colors.json'

const init = () => {
  const lineDelimiters = new LineDelimiters(Events, DataConverter, colors)
  lineDelimiters.init()
}

init()
