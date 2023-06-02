import { Alert } from "flowbite-react";
import { useNotificationValue } from "./contexts/NotificationContext";

const Notification = () => {
  const info = useNotificationValue();

  if (!info.message) {
    return;
  }

  return (
    <div className='container'>
      <Alert color={info.type}>{info.message}</Alert>
    </div>
  );
};

export default Notification;
