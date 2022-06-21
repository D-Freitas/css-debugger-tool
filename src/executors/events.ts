import { IEvents } from '@/protocols'
import { sizeContainerStyle } from '@/styles'

export class Events implements IEvents {
  private widthSize: number
  private heightSize: number

  public addLinesDelimiters (element: HTMLElement, color: string): void {
    element.style.boxShadow = `0 0 0 4px ${color}`
  }

  public addElementSize (element: HTMLElement, color: string): void {
    const sizeContainer = document.getElementById('css-debugger-tool_size-container')

    if (element !== undefined &&
        this.widthSize === undefined &&
        this.heightSize === undefined &&
        sizeContainer === null) {
      this.widthSize = element.offsetWidth
      this.heightSize = element.offsetHeight

      const sizeContainer = document.createElement('div')
      sizeContainer.id = 'css-debugger-tool_size-container'

      const stylesProps = {
        border: `3px dashed ${color}`,
        color
      }
      const styles = sizeContainerStyle(stylesProps)
      const sizeContainerStyled = (sizeContainer as any).customStyle(styles)

      sizeContainer.innerHTML = `
        <span>${this.widthSize}</span>
        <span>x</span>
        <span>${this.heightSize}</span>
      `

      document.body.appendChild(sizeContainerStyled)
    }
  }

  public removeLinesDelmiters (element: HTMLElement, color: string): void {
    const [r, g, b, a] = element.style.boxShadow.split(' ')
    const elementDelimiterColor = `${r} ${g} ${b} ${a}`
    if (elementDelimiterColor === color) {
      element.style.boxShadow = ''
    }
  }

  public removeElementSize (): void {
    document.getElementById('css-debugger-tool_size-container')?.remove()
    this.widthSize = undefined
    this.heightSize = undefined
  }
}
