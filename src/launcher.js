class Launcher {
  constructor (DataConverter, Enabler, Disabler, ElementBringer, Events, colors) {
    this.enabler = new Enabler(ElementBringer, DataConverter, Events, colors)
    this.disabler = new Disabler(ElementBringer, DataConverter, colors)
  }

  enable () {
    this.enabler.bringColors()
    this.enabler.insertEventsToElements()
  }

  disable () {
    this.disabler.disableAssignedEvents()
    this.disabler.disableLineAroundElements()
  }
}

export default Launcher
