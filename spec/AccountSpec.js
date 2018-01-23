"use strict"

describe("Account", function() {

  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("initializes as empty", function() {
    expect(account.displayContents()).toEqual([])
  });
});
