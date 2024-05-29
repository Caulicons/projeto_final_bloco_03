import { FC } from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className={`min-h-[85vh] p-6 select-none `}>{children}</main>;
};

export default Main;
("");
