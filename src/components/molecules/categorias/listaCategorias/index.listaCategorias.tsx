import { FC, useEffect, useState } from "react";
import { CategoriaSchema } from "../../../../schemas/categoria.schema";
import { categoriaService } from "../../../../services/categoria/categoria.service";
import CategoriaCard from "../categoriaCard/index.categoriaCard";
import Loading from "../../../atom/loading/index.loading";

interface ListaCategoriasProps {}

const ListaCategorias: FC<ListaCategoriasProps> = () => {
  const [categorias, setCategorias] = useState([] as CategoriaSchema[]);
  const [isLoading, setIsLoading] = useState(true);
  const getCategorias = async () => {
    setCategorias((await categoriaService.getAll()) as CategoriaSchema[]);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategorias();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        categorias.map((item) => (
          <CategoriaCard key={item.id} categoria={item} />
        ))
      )}
    </>
  );
};
export default ListaCategorias;
