"use client";

import { useParams } from "next/navigation";
import StudentCard from "@/app/components/StudentCard";

export default function StudentPage() {
  const { id } = useParams();

  return (
    <main className="p-8">
      <h1>Student Details</h1>
      <p>Student ID: {id}</p>
    </main>
  );
}
