import { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <img
        src="/svg/logo.svg"
        className="animate-bounce shadow-2xl w-16"
        alt=""
      />
    </div>
  );
};

export default Loading;
