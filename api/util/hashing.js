import bcrypt from "bcrypt";

const saltRound = 10;

export const hashPassword = (plainPassword) => {
  const salt = bcrypt.genSaltSync(saltRound);

  return bcrypt.hashSync(plainPassword, salt);
};

export const compareHashPassword = (plainPassword, hashValue) => {
  return bcrypt.compareSync(plainPassword, hashValue);
};
