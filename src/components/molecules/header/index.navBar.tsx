import { Car, User } from "@phosphor-icons/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <header className="min-h-[10vh] bg-indigo-400 p-6  select-none ">
      <div className="flex justify-between items-center max-w-7xl  mx-auto">
        <Link to={"/"} className="flex gap-2 items-center">
          <img src="/svg/logo.svg" alt="" className="h-10" />
          <h2 className="font-semibold text-xl">Tudo Caro</h2>
        </Link>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                to={"/categorias"}
                className="hover:underline font-semibold"
              >
                Categorias
              </Link>
            </li>
            <li>
              <Link
                to={"/criar-categoria"}
                className="hover:underline font-semibold"
              >
                {" "}
                Criar Categoria
              </Link>
            </li>
            <li>
              <User
                size={32}
                className="hover:cursor-pointer hover:fill-white"
              />
            </li>
            <li>
              <Car
                size={32}
                className="hover:cursor-pointer hover:fill-white"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
