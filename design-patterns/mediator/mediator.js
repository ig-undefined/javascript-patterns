// Player
function Player(name) {
  this.points = 0;
  this.name = name;
}
Player.prototype.play = function () {
  this.points += 1;
  mediator.played();
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

// Mediator
var mediator = {
  
  // All players
  players: {},

  // Initialization
  setup: function () {
    var players = this.players;
    players.home = new Player('Home');
    players.guest = new Player('Guest');
  },

  // Updates score if someone make move
  played: function () {
    var players = this.players
      , score = {
        Home: players.home.points,
        Guest: players.guest.points
      };

    scoreboard.update(score);
  },

  // Event handler for user action
  keypress: function (e) {
    e = e || window.event;

    if (e.which === 49) {
      mediator.players.home.play();
      return;
    }
    if (e.which === 48) {
      mediator.players.guest.play();
      return;
    }
  }
};

// Start game!
mediator.setup();
window.onkeypress = mediator.keypress;

// Game will finish in 30 seconds
setTimeout(function () {
  window.onkeypress = null;
  alert('Game Over!');
}, 30000);