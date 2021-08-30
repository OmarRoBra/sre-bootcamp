const conn = require("../config/db");
const util = require("util");
const query = util.promisify(conn.query).bind(conn);
const crypto = require("crypto");

const { getToken } = require("../Helpers/JWTSign");

export const loginFunction = async (username, password) => {
  try {
    const results = await query(
      `SELECT * FROM users where username ="${username}"`
    );

    if (results.length > 0) {
      console.log(results);
      const pass = crypto
        .createHash("sha512")
        .update(password + results[0].salt)
        .digest("hex");

      if (pass === results[0].password) {
        const token = getToken(results[0].role);
        console.log(token);
        return {
          status: "200",
          token,
          msg: "Loged in",
        };
      } else {
        return {
          status: "403",
          msg: "Invalid credentials",
        };
      }
    } else {
      return {
        status: "403",
        msg: "User Not found",
      };
    }
  } catch (error) {
    console.log(error);
  }
};
