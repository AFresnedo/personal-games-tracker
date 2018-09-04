const isOwner = function(userId, ownerId) {
  if (userId === ownerId) {
    return true;
  }
  else {
    return false
  }

}
