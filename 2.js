function repeat(operation, num) {
    'use strict';
    if (num <= 0) {
      return;
    }
    operation();
    repeat(operation, num-1);
}
module.exports = repeat;
