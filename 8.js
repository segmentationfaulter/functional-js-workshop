function duckCount() {
  'use strict';
  let args = Array.from(arguments);
  let ducks = args.filter((duck) => {
        return hasOwnProperty.call(duck, 'quack');
    }
  ).length;
  return ducks;
}

module.exports = duckCount;
