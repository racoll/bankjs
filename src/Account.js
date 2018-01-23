"use strict"

function Account() {
  this.contents = []
};

Account.prototype.displayContents = function() {
  return this.contents;
}
