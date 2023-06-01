import { useQuery } from "react-query";
import ticketService from "../services/ticket";

const Tickets = () => {
  const ticketResult = useQuery("tickets", ticketService.getAll, { retry: 3 });

  if (ticketResult.isLoading) {
    return <div>Loading your tickets...</div>;
  }
  if (ticketResult.isError) {
    return <div>Ticket service not available due to problems in server!</div>;
  }

  const tickets = ticketResult.data;

  return (
    <div>
      <h1>All Tickets</h1>
      <div className='ticket-table'>
        <table>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  {ticket.type} {ticket.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
