const router = require("express").Router();

const User = require("../models/user");

router.get("/getusers", async (req, res) => {
  try {
    const data = await User.find({});
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/getuser/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const data = await User.findById(id);
    console.log(data);
    res.json({ data });
  } catch (error) {
    // console.log(error)
    res.status(400).json({ message: error });
  }
});

router.put("/updateuser", async (req, res, next) => {
  const { name, id } = req.body;
  // First - Verifying if name and id is present
  if (name && id) {
    try {
      const user = await User.findById(id);
      user.name = name;
      const saveduser = await user.save();
      if (saveduser) {
        res.status(201).json({ message: "Update successful", user });
      } else {
        res.status(400).json({ message: "An error occurred" });
        process.exit(1);
      }
    } catch (error) {
      res
        .status(400)
        .json({ message: "An error occurred", error: error.message });
    }
  }
});

router.delete("/deleteuser", async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id);
    const removeduser = user.remove();
    if (removeduser) {
      res.status(201).json({ message: "User successfully deleted", user });
    } else {
      res.status(400).json({ message: "Cannot remove the user.", user });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "An error occurred", error: error.message });
  }
});

module.exports = router;
