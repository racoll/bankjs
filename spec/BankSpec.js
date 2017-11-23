"use strict";

describe("Bank", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("initializes with a balance of zero", function() {
    expect(bank.getBalance()).toEqual(0);
  });

  it("can accept a deposit of 100", function() {
    bank.depositAmount(100);
    expect(bank.getBalance()).toEqual(100);
  });

  it("can accept a withdrawal of 50", function() {
    bank.depositAmount(100);
    bank.withdrawAmount(50);
    expect(bank.getBalance()).toEqual(50);
  });

  it("can store a record of a deposit", function() {
    bank.depositAmount(200);
    expect(bank.getDeposits()).toEqual([200]);
  });

  it("can store a record of a withdrawal", function() {
    bank.depositAmount(200);
    bank.withdrawAmount(100);
    expect(bank.getWithdrawals()).toEqual([100]);
  });



});
