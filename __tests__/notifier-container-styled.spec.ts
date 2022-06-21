import '@/globals/custom-prototypes'
import { notifierContainerStyle } from '@/styles'

describe('Notifier Container Styled', () => {
  it('should style the notifier container element as expected', () => {
    const notifier = document.createElement('div')
    const styles = notifierContainerStyle()
    const notifierStyled = (notifier as any).customStyle(styles)

    const styleAttributes = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      left: '50%',
      top: '-53px',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
      transform: 'translateX(-50%)',
      userSelect: 'none',
      borderRadius: '10px',
      background: 'rgba(0, 0, 0, 0.5)',
      transition: 'top .5s',
      width: '200px',
      height: '50px',
      zIndex: '999999'
    }

    const stylizedAttributes = []
    for (const styleAttribute in styleAttributes) {
      if (notifierStyled.style[styleAttribute] === styleAttributes[styleAttribute]) {
        stylizedAttributes.push(styleAttribute)
      }
    }
    expect(stylizedAttributes).toEqual(Object.keys(styleAttributes))
  })
})