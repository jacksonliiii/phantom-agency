import React, { useState } from "react";

const TicketPage = ({ createTicket }) => {
  const [newType, setNewType] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const resetForm = () => {
    setNewDescription("");
    setNewType("");
  };

  const addTicket = (event) => {
    event.preventDefault();

    createTicket({
      type: newType,
      description: newDescription,
    });
    resetForm();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="ticket-form-div">
        <form onSubmit={addTicket}>
          <div className="mb-4">
            <label htmlFor="request-type" className="text-lg font-bold mb-2">
              Request Type
            </label>
            <select
              name="Request Type"
              value={newType}
              onChange={({ target }) => {
                setNewType(target.value);
              }}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="default">Select type of request...</option>
              <option value="sighting">Phantom sighting</option>
              <option value="possession">Phantom possession</option>
              <option value="misc">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-lg font-bold mb-2">
              Description
            </label>
            <input
              type="text"
              value={newDescription}
              name="description"
              onChange={({ target }) => {
                setNewDescription(target.value);
              }}
              placeholder="Enter description here..."
              id="description"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button type="submit">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
