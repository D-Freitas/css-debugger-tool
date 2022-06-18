class Notifier {
  #notifier = document.createElement('div')

  createNotifier () {
    this.#notifier.id = 'notifier'
    const notifierStyle = {
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
      background: 'rgba(0, 0, 0, .5)',
      transition: 'top .5s',
      width: '200px',
      height: '50px',
      zIndex: '999999'
    }
    Object.entries(notifierStyle).forEach(([key, value]) => {
      this.#notifier.style[key] = value
    })
    document.body.appendChild(this.#notifier)
  }

  showNotifier (message) {
    const color = message === 'CSS Debugger enabled'
      ? '#18a558'
      : '#eb9c3c'

    this.#notifier.style.top = '8px'
    this.#notifier.style.boxShadow = `0 0 0 4px ${color}`
    this.#notifier.style.color = color
    this.#notifier.innerText = message

    setTimeout(() => {
      this.#notifier.style.top = '-60px'
    }, 2000)
  }
}

export default Notifier
