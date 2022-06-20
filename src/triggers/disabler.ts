import { IDisabler, IElementBringer, IDataConverter } from '@/protocols'

export class Disabler implements IDisabler {
  private colorsRgbaWithLine: string[]

  constructor (
    private elementBringer: IElementBringer,
    private dataConverter: IDataConverter,
    private colors: string[],
  ) {
    this.colorsRgbaWithLine = this.colors.map(color => {
      return `${this.dataConverter.convertHexToRgba(color)} 0px 0px 0px 4px`
    })
  }

  public disableAssignedEvents (): void {
    for (let element of this.elementBringer.puller()) {
      element.onmouseover = null
      element.onmouseleave = null
    }
  }

  public disableLineAroundElements (): void {
    for (const element of this.elementBringer.puller()) {
      const isElementShadow = element.style.boxShadow !== null
      const elementHasLine = this.colorsRgbaWithLine.includes(element.style.boxShadow)
      if (isElementShadow && elementHasLine) element.style.boxShadow = null
    }
  }
}
