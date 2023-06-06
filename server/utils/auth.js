const jwt = require("jsonwebtoken");

// set token secret and expiration date
//heroku set environment variable  for secrets
//show environment variables section for configuration, hidden by default
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes
  //destructuring req needed. fixed error
  authMiddleware: function ({req}) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization || req.body.token;
    
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
