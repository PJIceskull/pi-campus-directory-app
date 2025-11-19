export default function StudentCard({ name, major, year }) {
  // View output in console
  console.log(name);
  console.log(major);
  console.log(year);

  return (
    <div className="rounded-xl bg-slate-600 p-5">
      <h2 className="text-2xl font-bold">Student Name: {name}</h2>
      <p className="text-lg">
        <span className="font-bold">Major:</span> {major}
      </p>
      <p className="text-lg">
        <span className="font-bold">Year:</span> {year}
      </p>
    </div>
  );
}
