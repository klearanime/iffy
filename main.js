const colorCombinator = require('./color-combinator.js');
const colorDeconstructor = require('./color-deconstructor.js');

const color.messageNull = colorCombinator('Enter a color first.');
const color.messageNull = colorDeconstructor('Enter a color first.');

    return getInput();
console.log();






// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
