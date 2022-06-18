class ElementBringer {
  * puller () {
    const elementsFromBody = document.body.querySelectorAll('*')
    for (const element of elementsFromBody) {
      yield element
    }
  }
}

export default ElementBringer
