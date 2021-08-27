import type { NextPage } from "next";

const Home: NextPage = () => {
  const baseButtonClassName = "bg-cyan text-white w-28 h-10 rounded";
  return (
    <main className="container min-h-screen bg-black">
      <section className="flex justify-around items-center h-96 flex-col">
        {/* plain button with background */}
        <button className={baseButtonClassName}>Click Me</button>

        {/* button with hover state */}
        <button className={`${baseButtonClassName} hover:bg-cyanHover`}>
          Click Me
        </button>
      </section>
    </main>
  );
};

export default Home;
