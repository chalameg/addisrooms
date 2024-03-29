const router = require("express").Router();
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const jwtSecret = '4715aed3c946f7b0a38e6b534a9583628d84e96d10fbc04700770d572af3dce43625dd'
const User = require("../models/user");

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const result = bcrypt.compare(password, user.password);
      if (result) {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          { id: user._id, name:user.name, email: email },
          jwtSecret,
          {
            expiresIn: maxAge, // 3hrs in sec
          }
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000, // 3hrs in ms
        });

        res.status(200).json({
          message: "User logged in successfully!",
          user,
        })
      } else {
        res.status(400).json({ message: "Invalid credentials!" });
      }
    } else {
      res.status(400).json({ message: "Invalid credentials!" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  if(user){
    return res.status(401).json({message: "User with this email already exists!"})
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }
  try {
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedpassword,
    })
    if(user){
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          { id: user._id, name, email },
          jwtSecret,
          {
            expiresIn: maxAge, // 3hrs in sec
          }
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000, // 3hrs in ms
        });

        res.status(200).json({
            message: "User successfully created",
            user,
          })
    }
  } catch (err) {
    console.log(err.message)
    res.status(401).json({
      message: "User is not created!",
      error: err.message,
    });
  }
});

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("http://localhost:3000/");
// });

module.exports = router;
