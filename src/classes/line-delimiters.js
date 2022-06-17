import { colors } from '../mocks/line-colors.json'

class LineDelimiters {
  constructor (Events, States, DataConverter) {
    this.events = new Events()
    this.dataConverter = new DataConverter()
    this.states = new States()
    this.colors = colors
    this.colorsRgbaWithLine = colors.map(color => {
      return `${this.dataConverter.convertHexToRgba(color)} 0px 0px 0px 4px`
    })
  }

  init () {
    this.#bringPageElements()
    this.#bringColors()
    this.#insertEventsToElements()
  }

  disable () {
    for (const element of this.#bringPageElements()) {
      element.onmouseover = element.onmouseleave = null
      const isElementShadow = element.style.boxShadow !== null
      const elementHasLine = this.colorsRgbaWithLine.includes(element.style.boxShadow)
      if (isElementShadow && elementHasLine) element.style.boxShadow = null
    }
    this.states.runDebugger.forEach((state, i) => {
      this.states.runDebugger[i] = false
    })
  }

  * #bringPageElements () {
    const elementsFromBody = document.body.querySelectorAll('*')
    for (const element of elementsFromBody) {
      yield element
    }
  }

  #bringColors () {
    const elements = this.#bringPageElements()
    let index = 0
    let colorIndex = 0

    while (typeof elements.next().value !== 'undefined') {
      if (colorIndex >= this.colors.length) colorIndex = 0
      this.colors[index] = this.colors[colorIndex]
      index++
      colorIndex++
    }
  }

  #insertEventsToElements () {
    let i = 0

    for (const element of this.#bringPageElements()) {
      const lineColor = this.colors[i]
      const hexColor = this.dataConverter.convertHexToRgba(lineColor)
      element.onmouseover = () => this.events.addLinesDelimiters(element, hexColor)
      element.onmouseleave = () => this.events.removeLinesDelmiters(element, hexColor)
      i++
    }
  }
}

export default LineDelimiters
