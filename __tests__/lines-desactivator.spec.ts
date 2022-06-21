/* eslint-disable no-undef */
/* eslint-disable quotes */

describe('Lines Deactivator', () => {
  let isInitiated = true
  let pressedKeys = ']cdt'

  it("should be remove 't' in pressedKeys string if isInitiated is true and pressedKeys is ']cdt'", () => {
    function remover (inputtedKey: string) {
      if (isInitiated && inputtedKey === ']' && pressedKeys === ']cdt') {
        pressedKeys = pressedKeys.slice(0, -1)
      }
      return pressedKeys
    }

    const INPUTTED_KEY_MOCK = ']'
    const keyInserted = remover(INPUTTED_KEY_MOCK)
    expect(keyInserted).toBe(']cd')
  })

  it("should remove 'd' in pressedKeys string if isInitiated is true and pressedKeys is ']cd'", () => {
    function remover (inputtedKey: string) {
      if (isInitiated && inputtedKey === 't' && pressedKeys === ']cd') {
        pressedKeys = pressedKeys.slice(0, -1)
      }
      return pressedKeys
    }

    const INPUTTED_KEY_MOCK = 't'
    const keyInserted = remover(INPUTTED_KEY_MOCK)
    expect(keyInserted).toBe(']c')
  })

  it("should remove 'c' in pressedKeys string if isInitiated is true and pressedKeys is ']c'", () => {
    function remover (inputtedKey: string) {
      if (isInitiated && inputtedKey === 'd' && pressedKeys === ']c') {
        pressedKeys = pressedKeys.slice(0, -1)
      }
      return pressedKeys
    }

    const INPUTTED_KEY_MOCK = 'd'
    const keyInserted = remover(INPUTTED_KEY_MOCK)
    expect(keyInserted).toBe(']')
  })

  it("should remove ']' in pressedKeys string if isInitiated is true and pressedKeys is ']'", () => {
    function remover (inputtedKey: string) {
      if (isInitiated && inputtedKey === 'c' && pressedKeys === ']') {
        pressedKeys = pressedKeys.slice(0, -1)
      }
      return pressedKeys
    }

    const INPUTTED_KEY_MOCK = 'c'
    const keyInserted = remover(INPUTTED_KEY_MOCK)
    expect(keyInserted).toBe('')
  })

  it("should change modify initializer state to false if pressedKeys is empty string", () => {
    if (pressedKeys === '') {
      isInitiated = false
      expect(isInitiated).toBe(false)
    }
  })
})
