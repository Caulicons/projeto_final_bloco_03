import { FC } from "react";
import NavBar from "../header/index.navBar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/index.footer";
import Main from "../../atom/main/index.main";

interface ModelProps {}

const Model: FC<ModelProps> = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Model;
