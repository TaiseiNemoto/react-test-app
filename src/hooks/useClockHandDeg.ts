import { useEffect, useState } from 'react';

export const useClockHandDeg = () => {
  const [date, setDate] = useState(new Date());
  const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const [h, m, s] = time;

  useEffect(() => {
    const intervalId = setInterval(function () {
      setDate(new Date());
    }, 1000);
    return function () {
      clearInterval(intervalId);
    };
  }, []);

  const degHour = h * (360 / 12) + m * (360 / 12 / 60);
  const degMin = m * (360 / 60) + s * (360 / 60 / 60);
  const degSec = s * (360 / 60);

  return { degHour, degMin, degSec };
};
