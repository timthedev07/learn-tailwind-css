import { FC } from "react";

export const States: FC = () => {
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
      <button
        className={`${baseButtonClassName} active:bg-cyanActive opacity-50`}
      >
        Disabled
      </button>

      {/* checkbox */}
      <div className="p-4 max-w-xs mx-auto bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
          />
          <span className="text-gray-900 font-medium">Option 1</span>
        </label>
      </div>
    </section>
  );
};
