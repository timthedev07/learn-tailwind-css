import { FC } from "react";

export const Breakpoints: FC = ({}) => {
  return (
    <section className="flex justify-center items-center h-80 flex-col">
      {/*
        default bg color is yellow
        after a small(sm) breakpoint, the color would be green
      */}
      <div className=" h-1/2 w-9/12 text-white flex flex-col justify-center items-center bg-yellow-300 sm:bg-green-300 md:bg-cyan">
        Resize window to change my color
      </div>
    </section>
  );
};
