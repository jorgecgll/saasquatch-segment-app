import jwt from "jsonwebtoken";

const getToken = (user, key) => {
  const token = jwt.sign(
    {
      user
    },
    key,
    { noTimestamp: true }
  );

  return token;
};

export default getToken;
