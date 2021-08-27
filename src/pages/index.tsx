import type { NextPage } from "next";

const Home: NextPage = () => {
  const baseButtonClassName = "bg-cyan text-white w-28 h-10 rounded";
  return (
    <main className="container min-h-screen bg-black">
      <section className="flex justify-around items-center h-96 flex-col">
        {/* plain button with background */}
        <button className={baseButtonClassName}>I have nothing</button>

        {/* button with hover state */}
        <button className={`${baseButtonClassName} hover:bg-cyanHover`}>
          Hover over me
        </button>

        {/* button with focus state */}
        <button
          className={`${baseButtonClassName} focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50`}
        >
          Click Me
        </button>

        {/* button with active state */}
        <button className={`${baseButtonClassName} active:bg-cyanActive`}>
          Click me and hold
        </button>
      </section>
    </main>
  );
};

export default Home;
