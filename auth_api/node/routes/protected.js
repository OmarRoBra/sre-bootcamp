import { protectFunction } from "../services/protected";

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization;
  let response = protectFunction(authorization);
  console.log(response);

  if (!response) {
    res.status(403).send({
      data: "Aunauthorized",
    });
    return;
  }

  res.status(200).send({
    data: response,
  });

  next();
};
