const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = function (req, res, next) {
  const token = req.header('Authorization').split(" ")[1];
  // next()
  
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, "all is well");
    if(decoded){
      next();
    }else{
      
      res.status(401).json({ msg: 'Token is not valid' });
    }
    
  } catch (e) {
    res.status(401).json({ msg: `${e}` });
  }
};
