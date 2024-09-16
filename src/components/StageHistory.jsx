import { FaCircle } from "react-icons/fa";

const TimelineItem = ({ date, time, event }) => (
  <div className="flex mb-4">
    <div className="mr-4 text-gray-500 text-sm w-12">{date}</div>
    <div className="flex-shrink-0 mt-1 mr-3">
      <FaCircle className="text-blue-500 text-xs" />
    </div>
    <div>
      <p className="text-sm text-gray-600">{time}</p>
      <p className="font-medium">{event}</p>
    </div>
  </div>
);

const StageHistory = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">Stage History</h2>
      <h3 className="font-medium mb-3">August 2024</h3>
      <div className="space-y-4">
        <TimelineItem
          date="28/08"
          time="Team | 09:00am"
          event="Created Jiya Gopal"
        />
        <TimelineItem
          date="28/08"
          time="Team | 10:00am"
          event="Assigned to Aniruddh Naidu"
        />
        <TimelineItem
          date="28/08"
          time="Event | 12:00pm"
          event="Arrange a Call"
        />
        <TimelineItem
          date="28/08"
          time="Lead Update | 04:00pm"
          event="Marked as Contacted"
        />
      </div>
    </div>
  );
};

export default StageHistory;
