import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    // Token not provided
    return res.status(401).json({ error: "Authentication token is missing" });
  }

  // Verify the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      // Token verification failed
      return res.status(403).json({ error: "Token verification failed" });
    }

    // Token is valid, attach the user to the request object for later use
    req.user = user;
    next();
  });
};
