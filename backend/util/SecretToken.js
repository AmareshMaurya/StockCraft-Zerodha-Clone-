// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.createSecretToken = (id) => {
//   return jwt.sign({ id }, process.env.TOKEN_KEY, {
//     expiresIn: 3 * 24 * 60 * 60,
//   });
// };


const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
  );
};
