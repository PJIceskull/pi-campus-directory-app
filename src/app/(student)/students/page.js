"use client";

import StudentCard from "@/app/components/StudentCard";
import useTime from "@/app/hooks/useTime";

import { useState, useEffect } from "react";

export default function Page() {
  const studentData = [
    { name: "Alice", major: "CS", year: "Sophomore" },
    { name: "Brian", major: "Bio", year: "Freshman" },
    { name: "Cynthia", major: "Psych", year: "Senior" },
  ];

  const { currentTime } = useTime();

  return (
    <main className="p-8">
      <h1>Welcome to the Student Page</h1>

      <div className="bg-red-300 h-15">
        <h2>{currentTime}</h2>
      </div>

      <div className="grid gap-3 grid-cols-3 p-3 flex-1">
        {studentData.map((student) => (
          <div key={student.name}>
            <StudentCard
              name={student.name}
              major={student.major}
              year={student.year}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
