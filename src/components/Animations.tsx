import { FC } from "react";

export const Animations: FC = () => {
  return (
    <section className="flex bg-black text-white justify-center items-center h-auto flex-col">
      <img className="animate-spin w-96 h-96" src="/images/react.svg" alt="" />
      <img className="animate-ping w-96 h-96" src="/images/react.svg" alt="" />
      <img className="animate-pulse w-96 h-96" src="/images/react.svg" alt="" />
      <img
        className="animate-bounce w-96 h-96"
        src="/images/react.svg"
        alt=""
      />
      <img
        className="animate-wiggle w-96 h-96"
        src="/images/react.svg"
        alt=""
      />
    </section>
  );
};
