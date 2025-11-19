"use client";

import { useState, useEffect } from "react";

export default function facultyPage() {
  const facultyList = ["Dr. Warren", "Dr. Lee", "Dr. Miles"];

  return (
    <main>
      <div className="">
        <ul className="">
          {facultyList.map((facultyMember) => (
            <li key={facultyMember}>{facultyMember}</li>
          ))}
        </ul>
      </div>

      <div className="">
        <p>Please enter Faculty name</p>
        <input type="text" className="bg-gray-100" />
      </div>
    </main>
  );
}
