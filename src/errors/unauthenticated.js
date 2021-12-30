const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');
// Lỗi xác thực
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
