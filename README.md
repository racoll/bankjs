## Bank

This is a JavaScript program to imitate the functionality of a simple bank.

### Motivation

I wanted to practice my JavaScript skills, specifically those of good separation of concerns, good Object Oriented Design, and effective Test Driven Development.

### Built with

- JavaScript
- Jasmine

### Running the tests

- in the command line run: open SpecRunner.html

### How to use

- run: open SpecRunner.html
  - use cmd + opt + j to open Chrome DevTools console

- create a new bank and use it:
  - var bank = new Bank();
  - bank.depositAmount(100);
  - bank.getBalance();
  - etc.


### To Do

- Add a time stamping function to deposits and withdrawals


### USER STORIES:

1) As a bank customer, So I can save  and store money, I want to be able to make a deposit for an amount of money at the bank and see an updated balance.

2) As a bank customer, so I can spend money, I want to be able to withdraw an amount of money from the bank, and see an updated balance.

3) As a bank customer, so that I can keep track of my bank balance and my spending, I want to be able to print a statement from the bank, showing my balance.

4) As A bank customer, so that I can determine exactly when I made deposits and withdrawals, I want each deposit and withdrawal to have an associated date.
