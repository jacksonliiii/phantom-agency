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

usersRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;

  if (password === "") {
    response.status(400).send({ error: "Please fill in the `password` field" });
  }
  if (password.length < 8) {
    response
      .status(400)
      .send({ error: "`password` has to be at least 8 characters long" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

module.exports = usersRouter;
