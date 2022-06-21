import { IEnabler } from '@/protocols/enabler'
import { IDisabler } from '@/protocols/disabler'

export class Launcher {
  constructor (
    private enabler: IEnabler,
    private disabler: IDisabler
  ) {}

  public enable (): void {
    this.enabler.bringColors()
    this.enabler.insertEventsToElements()
  }

  public disable (): void {
    this.disabler.disableAssignedEvents()
    this.disabler.disableLineAroundElements()
    this.disabler.disableElemenstSizeBox()
  }
}
