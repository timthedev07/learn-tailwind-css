import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="container min-h-screen bg-black">
      <section className="flex justify-center items-center h-96">
        {/* plain button with background */}
        <button className="bg-cyan text-white w-28 h-10 rounded">
          Click Me
        </button>
      </section>
    </main>
  );
};

export default Home;
