import { IEvents } from '@/protocols'

class Events implements IEvents {
  public addLinesDelimiters (element: HTMLElement, color: string): void {
    element.style.boxShadow = `0 0 0 4px ${color}`
  }

  public removeLinesDelmiters (element: HTMLElement, color: string): void {
    const [r, g, b, a] = element.style.boxShadow.split(' ')
    const elementDelimiterColor = `${r} ${g} ${b} ${a}`
    if (elementDelimiterColor === color) {
      element.style.boxShadow = ''
    }
  }
}

export default Events
