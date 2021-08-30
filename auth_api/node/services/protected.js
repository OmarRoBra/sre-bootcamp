const jwt = require("jsonwebtoken");
const secret = "my2w7wjd7yXF64FIADfJxNs1oupTGAuW";

export const protectFunction = (authorization) => {
  if (authorization && authorization.startsWith("Bearer")) {
    var token = authorization.split(" ")[1];

    try {
      // Verify token
      jwt.verify(token, secret);
      return "You are under protected data";
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};
