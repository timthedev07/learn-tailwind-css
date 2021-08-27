import type { NextPage } from "next";
import { Buttons } from "../components/Buttons";

const Home: NextPage = () => {
  return (
    <main className="container min-h-screen bg-black min-w-full">
      <Buttons />
    </main>
  );
};

export default Home;
