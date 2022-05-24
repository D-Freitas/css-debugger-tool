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
    Array.from(this.elements).forEach(element => {
      element.onmouseover = element.onmouseleave = null
      const isElementShadow = element.style.boxShadow !== null
      const elementHasLine = this.colorsRgbaWithLine.includes(element.style.boxShadow)
      if (isElementShadow && elementHasLine) { element.style.boxShadow = null }
    })
    this.states.runDebugger.forEach((state, i) => {
      this.states.runDebugger[i] = false
    })
  }

  #bringPageElements () {
    this.elements = document.body.querySelectorAll('*')
  }

  #bringColors () {
    const elements = Array.from(this.elements)
    let targetIndex = 0
    elements.forEach((element, index) => {
      if (targetIndex >= this.colors.length) { targetIndex = 0 }
      this.colors[index] = this.colors[targetIndex]
      targetIndex++
    })
  }

  #insertEventsToElements () {
    Array.from(this.elements).forEach((element, i) => {
      element.onmouseover = () => {
        this.events.addLinesDelimiters(element, this.dataConverter.convertHexToRgba(this.colors[i]))
      }
      element.onmouseleave = () => {
        this.events.removeLinesDelmiters(element, this.dataConverter.convertHexToRgba(this.colors[i]))
      }
    })
  }
}

export default LineDelimiters
