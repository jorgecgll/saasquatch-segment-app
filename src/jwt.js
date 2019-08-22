import jwt from "jsonwebtoken";

// THIS IS NOT PRODUCTION READY CODE
// Generating the JWT token should be done in the backend

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
