require('./buttons/first.js');

function handleButton(name) {
  require.ensure([], function() {
    var handler = require('./buttons/' + name + '.js');
    handler();
  });
}

window.firstButton = function() {
  handleButton('first');
};

window.secondButton = function() {
  handleButton('second');
};
