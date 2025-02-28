import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date('2025-04-09T00:00:00');
    
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="flex flex-col items-center space-y-2 sm:space-y-6 md:space-y-4 lg:space-y-10">
     <div className="flex items-center justify-center gap-4 sm:gap-8 mb-2">
              <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
              <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">Events Start In</h2>
              <div className="w-24 sm:w-48 h-[2px] bg-[#15A6F7]"></div>
            </div>
      
      <div className="flex justify-center items-center space-x-1 xs:space-x-2 sm:space-x-3 md:space-x-4">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="bg-white/40 backdrop-blur-sm shadow-lg border border-white/50 text-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold rounded-2xl 
                        w-14 xs:w-16 sm:w-20 md:w-24 lg:w-28 
                        h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 
                        flex items-center justify-center
                        filter drop-shadow-md">
            {formatNumber(timeLeft.days)}
          </div>
          <span className="text-black text-xs sm:text-sm md:text-base mt-2">Days</span>
        </div>
        
        {/* Colon */}
        <div className="text-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex flex-col items-center h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 mt-5">:</div>
        
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-white/40 backdrop-blur-sm shadow-lg border border-white/50 text-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold rounded-2xl 
                        w-14 xs:w-16 sm:w-20 md:w-24 lg:w-28 
                        h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 
                        flex items-center justify-center
                        filter drop-shadow-md">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-black text-xs sm:text-sm md:text-base mt-2">Hours</span>
        </div>
        
        {/* Colon */}
        <div className="text-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex flex-col items-center h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 mt-5">:</div>
        
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-white/40 backdrop-blur-sm shadow-lg border border-white/50 text-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold rounded-2xl 
                        w-14 xs:w-16 sm:w-20 md:w-24 lg:w-28 
                        h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 
                        flex items-center justify-center
                        filter drop-shadow-md">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-black text-xs sm:text-sm md:text-base mt-2">Minutes</span>
        </div>
        
        {/* Colon */}
        <div className="text-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex flex-col items-center h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 mt-5">:</div>
        
        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-white/40 backdrop-blur-sm shadow-lg border border-white/50 text-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold rounded-2xl 
                        w-14 xs:w-16 sm:w-20 md:w-24 lg:w-28 
                        h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 
                        flex items-center justify-center
                        filter drop-shadow-md">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-black text-xs sm:text-sm md:text-base mt-2">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;