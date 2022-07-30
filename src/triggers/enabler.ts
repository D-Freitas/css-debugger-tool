import { IDataConverter, IElementBringer, IEnabler, IEvents } from '@/protocols'

export class Enabler implements IEnabler {
  constructor (
    private elementBringer: IElementBringer,
    private dataConverter: IDataConverter,
    private events: IEvents,
    private colors: string[]
  ) {}

  public bringColors (): void {
    const elements = this.elementBringer.puller()
    let index = 0
    let colorIndex = 0

    while (index <= elements.length) {
      if (colorIndex >= this.colors.length) colorIndex = 0
      this.colors[index] = this.colors[colorIndex]
      index++
      colorIndex++
    }
  }

  public insertEventsToElements (): void {
    let i = 0

    for (const element of this.elementBringer.puller()) {
      const lineColor = this.colors[i]
      const hexColor = this.dataConverter.convertHexToRgba(lineColor)
      element.onmouseover = () => {
        this.events.addLinesDelimiters(element, hexColor)
        this.events.addElementSize(element, hexColor)
      }
      element.onmouseleave = () => {
        this.events.removeLinesDelmiters(element, hexColor)
        this.events.removeElementSize()
      }
      i++
    }
  }
}
