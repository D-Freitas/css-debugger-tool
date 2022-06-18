/* eslint-disable no-undef */
/* eslint-disable quotes */
describe("Data Converter", () => {
  it("should be convert a hex color to rgba with 50% opacity", () => {
    function convertHexToRgba (value) {
      const hexValue = value.replace('#', '')
      const [r, g, b] = hexValue.match(/.{1,2}/g)
      const redToInt = parseInt(r, 16)
      const greenToInt = parseInt(g, 16)
      const blueToInt = parseInt(b, 16)
      const color = `rgba(${redToInt}, ${greenToInt}, ${blueToInt}, 0.5)`
      return color
    }

    const HEX_COLOR_MOCK = '#000000'
    const rgbaColor = convertHexToRgba(HEX_COLOR_MOCK)
    expect(rgbaColor).toBe('rgba(0, 0, 0, 0.5)')
  })
})
