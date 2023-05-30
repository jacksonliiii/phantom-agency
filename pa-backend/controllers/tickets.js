const ticketsRouter = require("express").Router();
const Ticket = require("../models/Ticket");
const { userExtractor } = require("../utils/middleware");

ticketsRouter.get("/", async (request, response) => {
  const tickets = await Ticket.find({}).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });

  return response.json(tickets);
});

ticketsRouter.get("/:id", async (request, response) => {
  const ticket = await Ticket.findById(request.params.id);
  if (ticket) {
    return response.status(200).json(Ticket);
  }
  return response.status(404).end();
});

ticketsRouter.post("/", userExtractor, async (request, response) => {
  const { number, type, description } = request.body;
  const user = request.user;

  if (!user) {
    return response.status(401).json({ error: "operation not permitted" });
  }

  const ticket = new Ticket({
    number,
    type,
    description,
    user: user.id,
  });

  const createdTicket = await ticket.save();
  await ticket.populate("user", { username: 1, name: 1, id: 1 });

  user.tickets = user.tickets.concat(createdTicket._id);
  await user.save();
  response.status(201).json(createdTicket);
});

ticketsRouter.put("/:id", async (request, response, next) => {
  const { number, type, description, user } = request.body;

  const ticket = {
    number,
    type,
    description,
    user: user.id,
  };

  try {
    const updatedTicket = await ticket.findByIdAndUpdate(
      request.params.id,
      ticket,
      { new: true }
    );
    response.json(updatedTicket);
  } catch (error) {
    next(error);
  }
});

ticketsRouter.delete("/:id", async (request, response, next) => {
  try {
    await Ticket.findByIdAndDelete(request.params.id);
    response.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = ticketsRouter;
