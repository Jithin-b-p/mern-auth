import { CustomAPIError } from "../error/custom-error.js";

export const errorhandlingMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(err.statusCode)
      .json({ status: "failure", message: err.message });
  }

  return res
    .status(500)
    .json({ status: "failure", message: "internal server Error" });
};
