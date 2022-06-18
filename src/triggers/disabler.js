class Disabler {
  constructor (ElementBringer, DataConverter, colors) {
    this.elementBringer = new ElementBringer()
    const dataConverter = new DataConverter()
    this.colorsRgbaWithLine = colors.map(color => {
      return `${dataConverter.convertHexToRgba(color)} 0px 0px 0px 4px`
    })
  }

  disableAssignedEvents () {
    for (const element of this.elementBringer.puller()) {
      element.onmouseover = element.onmouseleave = null
    }
  }

  disableLineAroundElements () {
    for (const element of this.elementBringer.puller()) {
      const isElementShadow = element.style.boxShadow !== null
      const elementHasLine = this.colorsRgbaWithLine.includes(element.style.boxShadow)
      if (isElementShadow && elementHasLine) element.style.boxShadow = null
    }
  }
}

export default Disabler
