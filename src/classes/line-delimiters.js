class LineDelimiters {
  constructor (Events, DataConverter, colors) {
    const events = new Events()
    this.addLinesDelimiters = events.addLinesDelimiters
    this.removeLinesDelimiters = events.removeLinesDelmiters

    const dataConverter = new DataConverter()
    this.convertHexToRgba = dataConverter.convertHexToRgba

    this.colors = colors
  }

  init () {
    this.bringPageElements()
    this.bringColors()
    this.insertEventsToElements()
  }

  bringPageElements () {
    this.elements = document.querySelectorAll('*')
  }

  bringColors () {
    const elements = Array.from(this.elements)
    let targetIndex = 0
    elements.forEach((element, index) => {
      if (targetIndex >= this.colors.length) {
        targetIndex = 0
      }
      this.colors[index] = this.colors[targetIndex]
      targetIndex++
    })
  }

  insertEventsToElements () {
    Array.from(this.elements).forEach((element, i) => {
      element.onmouseover = () => {
        this.addLinesDelimiters(element, this.convertHexToRgba(this.colors[i]))
      }
      element.onmouseleave = () => {
        this.removeLinesDelimiters(element, this.convertHexToRgba(this.colors[i]))
      }
    })
  }
}

export default LineDelimiters
