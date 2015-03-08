var secondScript = require('./secondScript.js');
console.log('Color from secondScript', secondScript.color);

module.exports = {
  hello: function () {
    console.log('Hello from firstScript');
  }
};
