import type { NextPage } from "next";
import { Breakpoints } from "../components/Breakpoints";
import { States } from "../components/States";
import { Transitions } from "../components/Transitions";

const Home: NextPage = () => {
  return (
    <main className="container min-h-screen bg-black min-w-full">
      <States />
      <Breakpoints />
      <Transitions />
    </main>
  );
};

export default Home;
