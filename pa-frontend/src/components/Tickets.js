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
    <div className="flex justify-center">
      <div className="w-3/4">
        <h1 className="text-center text-3xl font-bold mb-4 border-b-2 pb-2">
          All Tickets
        </h1>
        <div className="ticket-table border rounded-lg overflow-hidden">
          <table className="w-full">
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <b className="uppercase">{ticket.type}</b> {ticket.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
