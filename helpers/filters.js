const isOwner = function(req) {
  if (userId === ownerId) {
    return true;
  }
  else {
    return false;
  }

}
