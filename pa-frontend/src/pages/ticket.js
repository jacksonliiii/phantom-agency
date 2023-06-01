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
    <div>
      <b>Make A Request</b>
      <div className='ticket-form-div'>
        <form onSubmit={addTicket}>
          <div>
            <select
              name='Request Type'
              value={newType}
              onChange={({ target }) => {
                setNewType(target.value);
              }}
              required
            >
              <option value='default'>Select type of request...</option>
              <option value='sighting'>Phantom sighting</option>
              <option value='possession'>Phantom possession</option>
              <option value='misc'>Other</option>
            </select>
          </div>
          <div>
            <b>Description</b>{" "}
            <input
              type='text'
              value={newDescription}
              name='description'
              onChange={({ target }) => {
                setNewDescription(target.value);
              }}
              placeholder='Enter description here...'
              id='description'
            />
          </div>
          <button type='submit'>Submit Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
