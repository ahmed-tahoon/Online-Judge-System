const jwt = require("jsonwebtoken");
const User = require("../models/user")

const protect = async (req, res, next) => {

  let token;

  
  if (
    req.headers.authorization
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(403).send('You are not allowed to make this request..');
  }

  try {
    const decoded = jwt.verify(token, "12345");

    const user = await User.findById(decoded.id);


    if (!user) {
        return res.status(403).send('No user found with this id');
    }

    req.user = user;

    next();
  } catch (err) {
        return res.status(403).send(err);
  }
};


module.exports=protect;