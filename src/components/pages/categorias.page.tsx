import { FC } from "react";
import Container from "../atom/container/index.container";
import ListaCategorias from "../molecules/categorias/listaCategorias/index.listaCategorias";

interface CategoriasProps {}

const Categorias: FC<CategoriasProps> = () => {
  return (
    <Container className="w-full flex flex-wrap gap-6 justify-center items-center">
      <ListaCategorias />
    </Container>
  );
};

export default Categorias;
