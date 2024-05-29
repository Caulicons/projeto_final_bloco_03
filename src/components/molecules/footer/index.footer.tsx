import { FC } from "react";
import Container from "../../atom/container/index.container";
import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className=" bg-indigo-400  p-6">
      <Container className="grid  items-center gap-4  text-center   sm:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold ">Personal Blog</h3>
          <p className="text-sm font-bold ">
            <a href="https://www.generation.org/">Generation Brasil</a>
          </p>
        </div>
        <div className="grid gap-4">
          <p className="text-2xl">Social Medias</p>
          <ul className="flex justify-center gap-5">
            <a href="https://github.com/Caulicons">
              <GithubLogo size={45} weight="bold" />
            </a>
            <a href="https://twitter.com/Caulicons">
              <XLogo size={45} weight="bold" />
            </a>
            <a href="https://github.com/Caulicons">
              <LinkedinLogo size={45} weight="bold" />
            </a>
          </ul>
          <a href="https://storyset.com/people" className="text-xs">
            People illustrations by Storyset
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
