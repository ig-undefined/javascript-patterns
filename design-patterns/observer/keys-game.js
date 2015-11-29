var publisher = {
  subscribers: {
    any: []
  },

  on: function (type, fn, context) {
    type = type || 'any';
    fn = typeof fn === "function" ? fn : context[fn];

    if (typeof subscribers[type] === "undefined") {
      subscribers[type] = [];
    }
    subscribers[type].push({ fn: fn, context: context || this });
  },
  remove: function (type, fn, context) {
    this.visitSubscibers('unsubscribe', type, fn, context);
  },
  fire: function (type, publication) {
    this.visitSubscibers('publish', type, publication);
  },
  visitSubscibers: function (action, type, arg, context) {
    var pubtype = type || 'any'
      , subscribers = this.subscribers[pubtype]
      , i
      , max = subscribers ? subscribers.length : 0;

    for (i = 0; i < max; i += 1) {
      if (action === 'publish') {
        subscribers[i].fn.call(subscribers[i].context, arg);
      } else {
        if (subscribers[i].fn === arg &&
            subscribers[i].context === context) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
};

function Player(name, key) {
  this.points = 0;
  this.name = name;
  this.key = key;
  this.fire('newplayer', this);
}
Player.prototype.play = function () {
  this.points += 1;
  this.fire('play', this);
};

var game = {

  keys: {},

  addPlayer: function (player) {
    var key = player.key.toString().charCodeAt(0);
    this.keys[key] = player;
  },
  handleKeypress: function (e) {
    e = e || window.event;
    if (game.keys[e.which]) {
      game.keys[e.which].play();
    }
  },
  handlePlay: function (player) {
    var i
      , players = this.keys
      , score = {};

    for (i in players) {
      if (players.hasOwnProperty(i)) {
        score[players[i].name] = players[i].points;
      }
    }
    this.fire('scorechange', score);
  }
};

var publisher = {
  subscribers: {
    any: [] // event type: subsciber
  },

  subscibe: function (fn, type) {
    type = type || 'any';

    if (typeof this.subscribers[type] === "undefined") {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  unsubscribe: function (fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },
  publish: function (publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  visitSubscribers: function (action, arg, type) {
    var pubtype = type || 'any'
      , subscribers = this.subscribers[pubtype]
      , i
      , max = subscribers.length;

    for (i = 0; i < max; i += 1) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
};

// Scoreboard
var scoreboard = {

  // Updating HTML Element
  element: document.getElementById('results'),

  // Updates scores on the screen
  update: function (score) {
    var i
      , msg = "";

    for (i in score) {
      if (score.hasOwnProperty(i)) {
        msg += '<p><strong>' + i + '<\/strong>:';
        msg += score[i];
        msg += '<\/p>';
      }
    }
    this.element.innerHTML = msg;
  }
};

function makePublisher(o) {
  var i;

  for (i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
      o[i] = publisher[i];
    }
  }
  o.subscribers = { any: [] };
}

makePublisher(Player.prototype);
makePublisher(game);

Player.prototype.on("newplayer", "addPlayer", game);
Player.prototype.on("play", "handlePlay", game);
game.on("scorechange", scoreboard.update, scoreboard);
window.onkeypress = game.handleKeypress;