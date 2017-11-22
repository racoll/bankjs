"use strict";

function Bank() {
  this.INITIAL_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE;
  this.deposits = [];
}

  Bank.prototype.getBalance = function() {
    return this.balance;
  };

  Bank.prototype.depositAmount = function(number) {
    this.balance += number;
    this.deposits.push(number)
    return "Deposit of received!";
  };

  Bank.prototype.withdrawAmount = function(number) {
    this.balance -= number;
    return "Withdrawal accepted!";
  };

  Bank.prototype.getDeposits = function() {
    return this.deposits;
  }
