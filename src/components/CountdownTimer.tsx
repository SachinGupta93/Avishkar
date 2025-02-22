import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2025-03-03').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex justify-center space-x-12 md:space-x-24">
      {timeBlocks.map(({ label, value }) => (
        <div key={label} className="text-center">
          <motion.div
            key={value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-28 h-28 md:w-48 md:h-48 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white"></div>
            <span className="relative text-5xl md:text-8xl font-bold text-indigo-600">
              {value.toString().padStart(2, '0')}
            </span>
          </motion.div>
          <span className="text-lg md:text-2xl font-semibold text-gray-900">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;