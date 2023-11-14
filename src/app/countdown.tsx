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
    <div className="pl-2 flex items-center text">
      <p className="mr-4">Corsair Insignia is Sold Out</p>
      <a
        href="https://opensea.io/collection/4762-corsair-membership"
        target="https://opensea.io/collection/4762-corsair-membership"
      >
        <img
          width={24}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAK5JREFUaIHtmkEKwCAMBGPx/1+2x16qsCW23TBzrahDYEnVCAAAuGhjjN1rzBZoyiStScPjkEYbgZgbiLmxSkU1zbLiNSUty1YMMTcQc6PH/jRT50/pLctWDDE3EHMj8w/6k15xRtmKIeYGYm486RVnqaX2imr6SfssWzHE3EDMjSfnin/jNl3LVgwxNxBzoy++7b5VUeFcMQIxPxBzY5o0L7zYSYE76Cog5kZZsRMvLRtc5z2dXgAAAABJRU5ErkJggg=="
          alt="opensea"
        ></img>
      </a>
    </div>
  );
};

const addLeadingZero = (value: any) => (value < 10 ? `0${value}` : value);

export default Countdown;
