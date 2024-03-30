// Custom class for creating API responses
class ApiResponse {
  /**
   * Constructor for ApiResponse class.
   *
   * @param {number} statusCode - HTTP status code for the response.
   * @param {any} payload - Response payload or data.
   * @param {string} message - Response message (default: "Success").
   */
  constructor(statusCode, payload, message = "Success") {
    // Set properties specific to ApiResponse
    this.statusCode = statusCode; // HTTP status code for the response
    this.payload = payload; // Response payload or data
    this.message = message; // Response message
    this.success = statusCode < 400; // Indicate whether the response is successful (HTTP status < 400)
  }
}

// Export the ApiResponse class for use in other parts of the application
export { ApiResponse };
