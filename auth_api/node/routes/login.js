import { loginFunction } from "../services/login";

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    res.send({ msg: "Pls add and username and a password" });
    next();
    return;
  }
  let response = await loginFunction(username, password);

  // Resolving promise
  console.log(response.msg);
  res.status(response.status).send(response);
  next();
};
