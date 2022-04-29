class Events {
  addLinesDelimiters (element, color) {
    element.style.boxShadow = `0 0 0 4px ${color}`
  }

  removeLinesDelmiters (element, color) {
    const [r, g, b, a] = element.style.boxShadow.split(' ')
    const elementDelimiterColor = `${r} ${g} ${b} ${a}`
    if (elementDelimiterColor === color) {
      element.style.boxShadow = ''
    }
  }
}

export default Events
