const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try{
    let checkUser = await User.findOne({email})
    let checkUserName = await User.findOne({username})
    if(!checkUser && !checkUserName){
      const encrepterPassword = await bcrypt.hash(password,10);
      checkUser = new User({ username, email, password:encrepterPassword, });
      checkUser.save()
      res.send("success");
    }else{
      res.send("User already exists")
    }
  }catch(err){
    res.status(500).send(`Server Error: ${err}` )
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    const payload = { user: { id: user.id } };
    jwt.sign(payload, "all is well", (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
