import { Link, useParams } from "react-router-dom";
import Container from "../../../atom/container/index.container";
import { categoriaService } from "../../../../services/categoria/categoria.service";
import { FC } from "react";

interface DeletarCategoriaProps {}

const DeletarCategoria: FC<DeletarCategoriaProps> = () => {
  const id = useParams().id;
  const handleDelete = async () => {
    const c = await categoriaService.deleteById(Number(id));
    console.log(c);
    window.location.href = "/";
  };
  return (
    <Container>
      <div className="flex flex-col gap-10 text-center p-5 rounded-xl shadow-2xl">
        <h2 className="text-3xl text-bold text-center">
          Tem certeza que deseja deletar esta categoria?
        </h2>

        <div className="flex gap-5 mx-auto">
          <button
            className="bg-red-400 p-2 rounded-md"
            onClick={() => handleDelete()}
          >
            Deletar
          </button>
          <Link to={"/categorias"}>
            <button className="bg-yellow-300 p-2 rounded-md">Cancelar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default DeletarCategoria;
