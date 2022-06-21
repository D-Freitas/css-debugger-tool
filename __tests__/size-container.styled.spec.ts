import '@/globals/custom-prototypes'
import { sizeContainerStyle } from '@/styles'

describe('Size Container Styled', () => {
  it('should style the size container element as expected', () => {
    const size = document.createElement('div')
    const stylesProps = {
      border: '3px dashed #fff'
    }
    const styleAttributes = (props: any) => ({
      position: 'absolute',
      top: '0px',
      left: '0px',
      zIndex: '999999',
      fontSize: '30px',
      padding: '10px 30px',
      ...props
    })
    const styles = sizeContainerStyle(stylesProps)
    const sizeContainerStyled = (size as any).customStyle(styles)

    const stylizedAttributes = []
    for (const styleAttribute in styleAttributes(stylesProps)) {
      if (sizeContainerStyled.style[styleAttribute] === styles[styleAttribute]) {
        stylizedAttributes.push(styleAttribute)
      }
    }
    expect(stylizedAttributes).toEqual(Object.keys(styles))
  })
})
