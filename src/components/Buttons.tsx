import { FC } from "react";
export const Buttons: FC = () => {
  const baseButtonClassName = "bg-cyan text-white w-auto px-4 h-10 rounded";
  return (
    <section className=" bg-cyanElementBackdrop flex justify-around items-center h-96 flex-col">
      {/* plain button with background */}
      <button className={baseButtonClassName}>I have nothing</button>

      {/* button with hover state */}
      <button className={`${baseButtonClassName} hover:bg-cyanHover`}>
        Hover over me
      </button>

      {/* button with focus state */}
      <button
        className={`${baseButtonClassName} focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50`}
      >
        Click Me
      </button>

      {/* button with active state */}
      <button className={`${baseButtonClassName} active:bg-cyanActive`}>
        Click and hold
      </button>

      {/* disabled button */}
      <button className={`${baseButtonClassName} active:bg-cyanActive`}>
        Click and hold
      </button>
    </section>
  );
};
