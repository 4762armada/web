const Countdown: React.FC = ({}) => {
  return (
    <div className="marquee w-full whitespace-nowrap pl-2 flex items-center text">
      <div className="track">
        - CORSAIR INSIGNIA
        <span className="text-red-600"> SOLD OUT </span>- WE MINTING PUNK ARMADA
        ON NOVEMBER 30TH -
      </div>
    </div>
  );
};

const addLeadingZero = (value: any) => (value < 10 ? `0${value}` : value);

export default Countdown;
