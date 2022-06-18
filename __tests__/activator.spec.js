/* eslint-disable quotes */
let isInitiated = false
let pressedKeys = ''

describe("initializer", () => {
  it("should be insert ']' in pressedKeys string if isInitiated is false and pressedKeys is empty string", () => {
    function inserter (inputtedKey) {
      if (!isInitiated && pressedKeys === '') {
        pressedKeys += inputtedKey
      }
      return pressedKeys
    }

    const KEY_PRESSED_MOCK = ']'
    const keyInserted = inserter(KEY_PRESSED_MOCK)
    expect(keyInserted).toBe(']')
  })

  it("should be insert 'c' in pressedKeys string if isInitiated is false and pressedKeys is ']'", () => {
    function inserter (inputtedKey) {
      if (!isInitiated && pressedKeys === ']') {
        pressedKeys += inputtedKey
      }
      return pressedKeys
    }

    const KEY_PRESSED_MOCK = 'c'
    const keyInserted = inserter(KEY_PRESSED_MOCK)
    expect(keyInserted).toBe(']c')
  })

  it("should be insert 'd' in pressedKeys string if isInitiated is false and pressedKeys is ']c'", () => {
    function inserter (inputtedKey) {
      if (!isInitiated && pressedKeys === ']c') {
        pressedKeys += inputtedKey
      }
      return pressedKeys
    }

    const KEY_PRESSED_MOCK = 'd'
    const keyInserted = inserter(KEY_PRESSED_MOCK)
    expect(keyInserted).toBe(']cd')
  })

  it("should be insert 't' in pressedKeys string if isInitiated is false and pressedKeys is ']cd'", () => {
    function inserter (inputtedKey) {
      if (!isInitiated && pressedKeys === ']cd') {
        pressedKeys += inputtedKey
      }
      return pressedKeys
    }

    const KEY_PRESSED_MOCK = 't'
    const keyInserted = inserter(KEY_PRESSED_MOCK)
    expect(keyInserted).toBe(']cdt')
  })

  it("should be change modify initializer state to true if pressedKeys is ']cdt'", () => {
    if (pressedKeys === ']cdt') {
      isInitiated = true
      expect(isInitiated).toBe(true)
    }
  })
})
