import { FC, useState } from "react";
import { categoriaService } from "../../../../services/categoria/categoria.service";
import { CategoriaSchema } from "../../../../schemas/categoria.schema";
import Container from "../../../atom/container/index.container";
import { useParams } from "react-router-dom";

interface FormCategoriaProps {
  type: "criar" | "atualizar";
}

const FormCategoria: FC<FormCategoriaProps> = ({ type }) => {
  const id = useParams().id;

  const [categoria, setCategoria] = useState({} as CategoriaSchema);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (type === "criar") {
      await categoriaService.create(categoria);
    } else if (type === "atualizar") {
      await categoriaService.update(Number(id), categoria);
    }
  };
  return (
    <Container>
      <div className="flex flex-col gap-10 text-center p-5 rounded-xl shadow-2xl">
        <h2 className="text-3xl text-bold text-center">
          {type === "criar" ? "Criar" : "Atualizar"} Categoria
        </h2>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5">
          <label className="" htmlFor="">
            Nome da Categoria:
          </label>
          <input
            className="w-full min-h-8 border border-gray-500 "
            type="text"
            required
            onChange={(e) =>
              setCategoria({ ...categoria, nome: e.target.value })
            }
          />
          <button
            className="w-full bg-blue-500 rounded-xl min-h-7 "
            type="submit"
          >
            {type === "criar" ? "Criar" : "Atualizar"}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default FormCategoria;
