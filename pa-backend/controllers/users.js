const usersRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("tickets", {
    number: 1,
    type: 1,
    description: 1,
    user: 1,
  });

  response.json(users);
});

usersRouter.post("/register", async (request, response) => {
  const minPasswordLength = 8;
  const { newUsername, newName, newPassword } = request.body;

  if (newPassword === "") {
    response.status(400).send({ error: "Please fill in the `password` field" });
  }
  if (newPassword.length < minPasswordLength) {
    response
      .status(400)
      .send({ error: "`password` has to be at least 8 characters long" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(newPassword, saltRounds);

  const user = new User({
    username: newUsername,
    name: newName,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

module.exports = usersRouter;
