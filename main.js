const colorCombinator = require('./color-combinator.js');
const colorDeconstructor = require('./color-deconstructor.js');


const color1 = getInput(0);
const color2 = getInput(1);

if (color1 === undefined) {
  console.log('Enter a color please.');
} else if  (color2 === undefined) {
  const color = colorCombinator('Enter a color first.');
  const color = colorDeconstructor('Enter a color first.');
} else {
  const color = colorCombinator(color1, color2)
  console.log(message)
}
    return getInput();
console.log();






// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
