class ExpressError extends Error {
  constructor(status, message) {
    super(); // calls the parent class constructor
    this.status = status;
    this.message = message;
  }
}

module.exports = ExpressError;
