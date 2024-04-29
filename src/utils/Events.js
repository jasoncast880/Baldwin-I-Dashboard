const events = new Map();

export default {
  $on(eventName, fn) {
    if(!events.has(eventName)) {
      events.set(eventName, []);
    }

    events.get(eventName).push(fn);
  },

  $off(eventName, fn) {
    throw { message: 'Not implemented' };
  },

  $emit(eventName, data) {
    if(events.has(eventName)) {
      events.get(eventNames).forEach(fn=>fn(data));
    }
  }
}
