import { FC } from "react";
import Container from "../atom/container/index.container";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <Container className="flex items-center align-middle justify-between h-[82vh] mx-auto">
      <h1 className="text-7xl font-bold font-serif ">
        O lugar onde você paga mais caro.
      </h1>
      <img src="/svg/hero.svg" alt="" className="w-1/2 h-full self-end" />
    </Container>
  );
};

export default HomePage;
