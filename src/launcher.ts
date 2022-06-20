import { IEnabler } from '@/protocols/enabler'
import { IDisabler } from '@/protocols/disabler'

class Launcher {
  constructor (
    private enabler: IEnabler,
    private disabler: IDisabler,
  ) {}

  public enable (): void {
    this.enabler.bringColors()
    this.enabler.insertEventsToElements()
  }

  public disable (): void {
    this.disabler.disableAssignedEvents()
    this.disabler.disableLineAroundElements()
  }
}

export default Launcher
