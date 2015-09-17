function checkUsersValid(goodUsers) {
  'use strict';
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(user) {
        return goodUsers.some(function(goodUser) {
          return user.id === goodUser.id;
        });
    });
  };
}
module.exports = checkUsersValid;
