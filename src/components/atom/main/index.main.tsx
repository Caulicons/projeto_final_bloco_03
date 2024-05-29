import { FC } from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className={`min-h-[90vh] p-6 `}>{children}</main>;
};

export default Main;
("");
