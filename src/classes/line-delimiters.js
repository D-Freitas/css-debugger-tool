class LineDelimiters {
  constructor (Events, DataConverter, colors) {
    const events = new Events()
    this.addLinesDelimiters = events.addLinesDelimiters
    this.removeLinesDelmiters = events.removeLinesDelmiters

    const dataConverter = new DataConverter()
    this.convertHexToRgba = dataConverter.convertHexToRgba

    this.colors = colors
  }

  init () {
    this.bringPageElements()
    this.insertEventsToElements()
  }

  bringPageElements () {
    const elements = document.getElementsByTagName('*')
    this.elements = elements
  }

  insertEventsToElements () {
    Array.from(this.elements).forEach(element => {
      const randomIndex = Math.floor(Math.random() * (50 - 0)) + 0

      element.onmouseover = () => {
        this.addLinesDelimiters(element, this.convertHexToRgba(this.colors[randomIndex]))
      }
      element.onmouseleave = () => {
        this.removeLinesDelmiters(element, this.convertHexToRgba(this.colors[randomIndex]))
      }
    })
  }
}

export default LineDelimiters
