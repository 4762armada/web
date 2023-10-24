import { useEffect, useState } from "react";
import moment from "moment-timezone";

interface CountdownProps {
  targetTime: any;
}

const Countdown: React.FC<CountdownProps> = ({ targetTime }) => {
  const [currentTime, setCurrentTime] = useState<moment.Moment>(moment.utc());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment.utc());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const timeDifference = moment.duration(moment(targetTime).diff(currentTime));
  const days = timeDifference.days();
  const hours = timeDifference.hours();
  const minutes = timeDifference.minutes();
  const seconds = timeDifference.seconds();

  return (
    <div className="pl-2">
      mintOpensIn: {addLeadingZero(days)}{" "}
      <span className="countdown">Days</span> {addLeadingZero(hours)}{" "}
      <span className="countdown">Hours</span> {addLeadingZero(minutes)}{" "}
      <span className="countdown">Minutes</span> {addLeadingZero(seconds)}{" "}
      <span className="countdown">Seconds</span>
    </div>
  );
};

const addLeadingZero = (value: any) => (value < 10 ? `0${value}` : value);

export default Countdown;
