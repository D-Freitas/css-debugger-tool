class Enabler {
  constructor (ElementBringer, DataConverter, Events, colors) {
    this.elementBringer = new ElementBringer()
    this.dataConverter = new DataConverter()
    this.events = new Events()
    this.colors = colors
  }

  bringColors () {
    const elements = this.elementBringer.puller()
    let index = 0
    let colorIndex = 0

    while (typeof elements.next().value !== 'undefined') {
      if (colorIndex >= this.colors.length) colorIndex = 0
      this.colors[index] = this.colors[colorIndex]
      index++
      colorIndex++
    }
  }

  insertEventsToElements () {
    let i = 0

    for (const element of this.elementBringer.puller()) {
      const lineColor = this.colors[i]
      const hexColor = this.dataConverter.convertHexToRgba(lineColor)
      element.onmouseover = () => this.events.addLinesDelimiters(element, hexColor)
      element.onmouseleave = () => this.events.removeLinesDelmiters(element, hexColor)
      i++
    }
  }
}

export default Enabler
