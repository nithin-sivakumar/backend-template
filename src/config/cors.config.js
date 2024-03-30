// Define a CORS whitelist of allowed origins
const whitelist = [
  "*",
  // Add more URLs as required
];

// Define CORS options with the whitelist and support for credentials
const corsOptions = {
  // Check if the incoming request origin is in the whitelist
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // Allow requests from the whitelist or if no origin is provided (e.g., same-origin requests)
      callback(null, true);
    } else {
      // Deny requests from other origins
      callback(new Error("Not allowed by CORS"));
    }
  },

  // Enable credentials (cookies, authorization headers) for cross-origin requests
  credentials: true,

  // Additional configurations can be added here as needed
};

// Export CORS options for use in your application
export { corsOptions };
