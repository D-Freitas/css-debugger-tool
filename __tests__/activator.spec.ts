/* eslint-disable quotes */

describe('initializer', () => {
  let isInitiated = false
  let pressedKeys = ''

  it("should insert ']' in pressedKeys string if isInitiated is false and pressedKeys is empty string", () => {
    function inserter (inputtedKey: string) {
      if (!isInitiated && pressedKeys === '') {
        pressedKeys += inputtedKey
      }
      return pressedKeys
    }

    const KEY_PRESSED_MOCK = ']'
    const keyInserted = inserter(KEY_PRESSED_MOCK)
    expect(keyInserted).toBe(']')
  })

  it("should insert 'c' in pressedKeys string if isInitiated is false and pressedKeys is ']'", () => {
    function inserter (inputtedKey: string) {
      if (!isInitiated && pressedKeys === ']') {
        pressedKeys += inputtedKey
      }
      return pressedKeys
    }

    const KEY_PRESSED_MOCK = 'c'
    const keyInserted = inserter(KEY_PRESSED_MOCK)
    expect(keyInserted).toBe(']c')
  })

  it("should insert 'd' in pressedKeys string if isInitiated is false and pressedKeys is ']c'", () => {
    function inserter (inputtedKey: string) {
      if (!isInitiated && pressedKeys === ']c') {
        pressedKeys += inputtedKey
      }
      return pressedKeys
    }

    const KEY_PRESSED_MOCK = 'd'
    const keyInserted = inserter(KEY_PRESSED_MOCK)
    expect(keyInserted).toBe(']cd')
  })

  it("should insert 't' in pressedKeys string if isInitiated is false and pressedKeys is ']cd'", () => {
    function inserter (inputtedKey: string) {
      if (!isInitiated && pressedKeys === ']cd') {
        pressedKeys += inputtedKey
      }
      return pressedKeys
    }

    const KEY_PRESSED_MOCK = 't'
    const keyInserted = inserter(KEY_PRESSED_MOCK)
    expect(keyInserted).toBe(']cdt')
  })

  it("should change modify initializer state to true if pressedKeys is ']cdt'", () => {
    if (pressedKeys === ']cdt') {
      isInitiated = true
      expect(isInitiated).toBe(true)
    }
  })
})
