var jwt = require("jwt-simple");
const secret = "my2w7wjd7yXF64FIADfJxNs1oupTGAuW";

export const getToken = (role) => {
  var payload = {
    role: role,
  };
  return jwt.encode(payload, secret);
};
