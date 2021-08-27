import type { NextPage } from "next";
import { Breakpoints } from "../components/Breakpoints";
import { Buttons } from "../components/Buttons";

const Home: NextPage = () => {
  return (
    <main className="container min-h-screen bg-black min-w-full">
      <Buttons />
      <Breakpoints />
    </main>
  );
};

export default Home;
