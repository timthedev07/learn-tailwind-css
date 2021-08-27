import type { NextPage } from "next";
import { Buttons } from "../components/Buttons";

const Home: NextPage = () => {
  return (
    <main className="container min-h-screen bg-black">
      <Buttons />
    </main>
  );
};

export default Home;
