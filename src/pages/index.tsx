import type { NextPage } from "next";
import { Breakpoints } from "../components/Breakpoints";
import { States } from "../components/States";

const Home: NextPage = () => {
  return (
    <main className="container min-h-screen bg-black min-w-full">
      <States />
      <Breakpoints />
    </main>
  );
};

export default Home;
