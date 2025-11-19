import Image from "next/image";

export default function Home() {
  return (
    <main
      className="bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col justify-center items-center gap-4 h-screen"
      style={{}}
    >
      <h1 className="font-bold dark:text-white">
        Welcome to the Campus Directory
      </h1>
      <p className="dark:text-white">
        Current Theme: Automatically matches your system/browser preference
      </p>
    </main>
  );
}
