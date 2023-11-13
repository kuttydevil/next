import sendMail from './sendMail';
import data from '../public/data.json';

export default function Home() {
  const [employees, setEmployees] = useState(data);

  const sendEmailNotifications = async () => {
    const today = new Date();

    for (const employee of employees) {
      const companyEmployIdExpiryDate = new Date(employee.companyEmployIdExpiryDate);
      const passportExpiryDate = new Date(employee.passportExpiryDate);
      const airportPassIdExpiry = new Date(employee.airportPassIdExpiry);
      const licenseExpireDate = new Date(employee.licenseExpireDate);

      if (companyEmployIdExpiryDate.getTime() - today.getTime() <= 10 * 24 * 60 * 60 * 1000) {
        await sendMail('kuttydevilz@gmail.com', 'Company Employ ID Expiry Notification', `Your company employ ID expires on ${companyEmployIdExpiryDate}`);
      }

      if (passportExpiryDate.getTime() - today.getTime() <= 10 * 24 * 60 * 60 * 1000) {
        await sendMail('kuttydevilz@gmail.com', 'Passport Expiry Notification', `Your passport expires on ${passportExpiryDate}`);
      }

      if (airportPassIdExpiry.getTime() - today.getTime() <= 10 * 24 * 60 * 60 * 1000) {
        await sendMail('kuttydevilz@gmail.com', 'Airport Pass ID Expiry Notification', `Your airport pass ID expires on ${airportPassIdExpiry}`);
      }

      if (licenseExpireDate.getTime() - today.getTime() <= 10 * 24 * 60 * 60 * 1000) {
        await sendMail('kuttydevilz@gmail.com', 'License Expiry Notification', `Your license expires on ${licenseExpireDate}`);
      }
    }
  };

  useEffect(() => {
    sendEmailNotifications(); // Send email notifications immediately

    const interval = setInterval(sendEmailNotifications, 60 * 60 * 1000); // Send email notifications every hour

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div>
      <h1>Notify Autobot</h1>
      <p>This website will send you email notifications when your employees' company employ ID, passport, airport pass ID, or license is going to expire within the next 10 days.</p>
    </div>
  );
}
