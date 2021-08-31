import type { NextPage } from "next";
import { Breakpoints } from "../components/Breakpoints";
import { States } from "../components/States";
import { Transitions } from "../components/Transitions";
import { Animations } from "../components/Animations";

const Home: NextPage = () => {
  return (
    <main className="container min-h-screen bg-black min-w-full">
      <States />
      <Breakpoints />
      <Transitions />
      <Animations />
    </main>
  );
};

export default Home;
