class Events {
  constructor() {
    this.event = {};
  }

  /** Register an event handler */
  on(eventName, callback) {
    if (this.event[eventName]) this.event[eventName].push(callback);
    else this.event[eventName] = [callback];
  }

  /** Trigger all callbacks associated with
   *  a given eventName
   */
  trigger(eventName) {
    if (this.event[eventName]) {
      for (let callback of this.event[eventName]) {
        callback();
      }
    }
  }

  /** Remove all event handlers associated with
   *  the given eventName
   */
  off(eventName) {
    delete this.event[eventName];
  }
}
