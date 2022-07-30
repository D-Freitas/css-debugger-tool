import { IElementBringer } from '@/protocols'

export class ElementBringer implements IElementBringer {
  public puller (): NodeListOf<HTMLElement> {
    document.body[Symbol.iterator] = function * () {
      const nodes = this.querySelectorAll('*')
      for (const node of nodes) {
        yield node
      }
    }
    const elementsFromBody: NodeListOf<HTMLElement> = document.body.querySelectorAll('*')
    return elementsFromBody
  }
}
