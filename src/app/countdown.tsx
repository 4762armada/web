import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2023-10-25T10:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const timeDiff = targetDate - currentTime;
      setTimeRemaining(timeDiff);

      if (timeDiff <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="pl-2">
      mintOpenIn: {addLeadingZero(days)}{" "}
      <span className="countdown">Days</span> {addLeadingZero(hours)}{" "}
      <span className="countdown">Hours</span> {addLeadingZero(minutes)}{" "}
      <span className="countdown">Minutes</span> {addLeadingZero(seconds)}{" "}
      <span className="countdown">Seconds</span>
    </div>
  );
};

const addLeadingZero = (value: any) => (value < 10 ? `0${value}` : value);

export default Countdown;
