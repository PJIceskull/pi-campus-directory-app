"use client";

import { useState, useEffect } from "react";

export default function useTime() {
  const [time, setTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      return () => clearInterval(interval);
    }, 1000);
  }, [setTime]);

  //   console.log(time);
  //   console.log(time.toLocaleTimeString());

  return { time };
}
