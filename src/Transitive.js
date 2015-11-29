function Transitive () {
  this.prevState = 'UNSTARTED';
  this.currentState = 'UNSTARTED';
  this.queue = [];
  this.events = {
    'UNSTARTED':  null,
    'STARTING':   null,
    'REQUESTING': null,
    'WAITING':    null,
    'WORKING':    null,
    'ERROR':      null,
    'SUCCESS':    null
  };
};

/**
 *
 */
Transitive.EVENT_NAMES = [
  'UNSTARTED',
  'STARTING',
  'REQUESTING',
  'WAITING',
  'WORKING',
  'ERROR',
  'SUCCESS'
];

/**
 *
 */
Transitive.prototype.trigger = function (event_name, arg) {
  if (this.events[event_name]) {
    this.events[event_name].call(this, arg);
  }
};

/**
 *
 */
Transitive.prototype.on = function (event_name, callback) {
  if (!(event_name in this.events)) {
    return;
  }
  this.events[event_name] = callback;
};

/**
 *
 */
Transitive.prototype.off = function (event_name) {
  if (this.events[event_name]) {
    this.events[event_name] = null;
  }
};

/**
 *
 */
Transitive.prototype.changeState = function (to) {
  if (to in this.events) {
    this.prevState = this.currentState;
    this.currentState = to;
    this.trigger(to);
  }
};

/**
 *
 */
Transitive.prototype.enqueue = function (state) {
  this.queue.unshift(state);
};

/**
 *
 */
Transitive.prototype.process = function () {
  var new_state = this.queue.shift();
  this.changeState(new_state);
};
