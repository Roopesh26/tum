import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import confetti from 'canvas-confetti';

interface CountdownTimerProps {
  targetDate: string;
  onEnd?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const hasFired = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  // Listen for user interaction to allow audio play
  useEffect(() => {
    const enableAudio = () => {
      setUserInteracted(true);
      window.removeEventListener('click', enableAudio);
    };
    window.addEventListener('click', enableAudio);
    return () => window.removeEventListener('click', enableAudio);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        if (!hasFired.current) {
          hasFired.current = true;

          // Confetti burst
          confetti({
            particleCount: 300,
            spread: 160,
            origin: { y: 0.6 },
          });

          // Play sound after user interaction
          if (userInteracted && audioRef.current) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch((e) => {
                console.warn("Sound play error:", e.message);
              });
            }
          }

          // Optional callback
          onEnd?.();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onEnd, userInteracted]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <motion.div
              key={unit.value}
              initial={{ scale: 0.8, rotateX: -90 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="text-3xl md:text-4xl font-mono font-bold text-white mb-2"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.5)'
              }}
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-sm text-gray-300 font-medium tracking-wider uppercase">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Audio element (hidden) */}
      <audio ref={audioRef} src="/timer-end.mp3" preload="auto" />
    </>
  );
};
