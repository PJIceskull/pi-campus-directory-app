"use client";

import { useState, useEffect } from "react";

export default function useTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      //   return () => clearInterval(interval);
      return currentTime;
    }, 1000);
  }, [currentTime]);

  //   console.log(currentTime);
  //   console.log(currentTime.toLocaleTimeString());

  return currentTime.toLocaleTimeString;
}
