class States {
  #runDebugger = [false, false, false, false]

  get runDebugger () { return this.#runDebugger }
  set runDebugger (runDebugger) { this.#runDebugger = runDebugger }
}

export default States
