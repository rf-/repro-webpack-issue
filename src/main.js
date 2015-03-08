require('./first.js');

window.firstButton = function() {
  require.ensure([], function() {
    var first = require('./first.js');
    first();
  });
};

window.secondButton = function() {
  require.ensure([], function() {
    var second = require('./second.js');
    second();
  });
};
