import { FaPhone, FaEnvelope } from "react-icons/fa";

const EventCard = ({
  icon: Icon,
  title,
  startDate,
  startTime,
  endDate,
  endTime,
}) => (
  <div className="bg-white border rounded p-3">
    <div className="flex items-center mb-2">
      <Icon
        className={`mr-2 ${
          title.includes("Email") ? "text-orange-500" : "text-green-500"
        }`}
      />
      <span className="font-medium">{title}</span>
    </div>
    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
      <div>
        <div>Start</div>
        <div>{startDate}</div>
        <div>{startTime}</div>
      </div>
      <div>
        <div>End</div>
        <div>{endDate}</div>
        <div>{endTime}</div>
      </div>
    </div>
  </div>
);

const UpcomingOverview = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming & Overdue</h2>
        <a href="#" className="text-blue-600 text-sm">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <EventCard
          icon={FaPhone}
          title="Arrange a Call"
          startDate="27/08/2024"
          startTime="12:00pm"
          endDate="27/08/2024"
          endTime="01:00pm"
        />
        <EventCard
          icon={FaEnvelope}
          title="Follow Up Email"
          startDate="27/08/2024"
          startTime="02:00pm"
          endDate=""
          endTime=""
        />
        <EventCard
          icon={FaPhone}
          title="Arrange a Call"
          startDate="28/08/2024"
          startTime="10:00am"
          endDate="28/08/2024"
          endTime="10:30am"
        />
      </div>
    </div>
  );
};

export default UpcomingOverview;
