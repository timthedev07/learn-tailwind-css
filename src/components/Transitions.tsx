import { FC } from "react";

export const Transitions: FC = () => {
  return (
    <section className="flex bg-gray-900 justify-around items-center h-96 flex-col">
      <button className="btn transition duration-200 ease-in delay-75 hover:bg-cyanElementBackdrop transform hover:scale-110">
        Hover
      </button>
      <button className="btn transition duration-500 ease-out delay-500 hover:bg-cyanElementBackdrop transform hover:scale-110">
        Hover
      </button>
      <button className="btn transition duration-1000 ease-in-out delay-1000 hover:bg-cyanElementBackdrop transform hover:scale-110">
        Hover
      </button>
    </section>
  );
};
