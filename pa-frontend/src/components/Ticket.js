import React from "react";

import { useNotificationDispatch } from "./contexts/NotificationContext";
import { useQueryClient } from "react-query";

import TicketPage from "../pages/ticket";
import ticketService from "../services/ticket";

const Ticket = () => {
  const notificationDispatch = useNotificationDispatch();
  const queryClient = useQueryClient();

  const createTicket = async (ticketObject) => {
    try {
      await ticketService.create(ticketObject);
      notificationDispatch({
        message: `Your ticket has been submitted`,
        type: "success",
      });
      queryClient.invalidateQueries("tickets");
    } catch (error) {
      if (error.response.data.error.includes("validation")) {
        notificationDispatch({
          message: `Please fill out the form before submitting.`,
          type: "warning",
        });
      } else {
        console.log(error);
      }

    }
  };

  return <TicketPage createTicket={createTicket} />;
};

export default Ticket;
