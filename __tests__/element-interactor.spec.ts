/* eslint-disable no-undef */
/* eslint-disable quotes */
describe("Element Iteractor", () => {
  it("should return an array equivalent to what the generator function generates", () => {
    const elementsMock = Array(100).fill(document.createElement('div'))

    function * bringElements () {
      for (const element of elementsMock) {
        yield element
      }
    }

    const capturedElements = []

    for (const element of bringElements()) {
      capturedElements.push(element)
    }

    expect(capturedElements).toEqual(elementsMock)
  })
})
