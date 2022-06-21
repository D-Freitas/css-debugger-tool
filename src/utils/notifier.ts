import { INotifier } from '@/protocols'
import { notifierContainerStyle } from '@/styles'

export class Notifier implements INotifier {
  #notifier = document.createElement('div')

  public createNotifier (): void {
    this.#notifier.id = 'notifier'
    const styles = notifierContainerStyle()
    const notifierStyled = (this.#notifier as any).customStyle(styles)
    document.body.appendChild(notifierStyled)
  }

  public showNotifier (message: string): void {
    const color = message === 'CSS Debugger enabled'
      ? '#18a558'
      : '#eb9c3c'

    this.#notifier.style.top = '8px'
    this.#notifier.style.boxShadow = `0 0 0 4px ${color}`
    this.#notifier.style.color = color
    this.#notifier.innerText = message

    setTimeout(() => {
      this.#notifier.style.top = '-60px'
    }, 2000)
  }
}
