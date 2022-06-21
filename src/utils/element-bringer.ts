import { IElementBringer } from '@/protocols'

export class ElementBringer implements IElementBringer {
  public * puller (): Generator<HTMLElement> {
    const elementsFromBody: NodeListOf<HTMLElement> = document.body.querySelectorAll('*')
    for (const element of elementsFromBody) {
      yield element
    }
  }
}
