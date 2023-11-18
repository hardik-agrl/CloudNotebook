var jwt = require("jsonwebtoken");
const JWT_SECRET = 'SecretKey$';

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send("Enter using a valid token");
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send("Enter using a 2 valid token");
  }
};

module.exports = fetchUser;
