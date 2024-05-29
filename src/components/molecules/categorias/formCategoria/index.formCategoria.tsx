import { FC, useEffect, useState } from "react";
import { categoriaService } from "../../../../services/categoria/categoria.service";
import { CategoriaSchema } from "../../../../schemas/categoria.schema";
import Container from "../../../atom/container/index.container";
import { useNavigate, useParams } from "react-router-dom";
import { CircleNotch } from "@phosphor-icons/react";

interface FormCategoriaProps {
  type: "criar" | "atualizar";
}

const FormCategoria: FC<FormCategoriaProps> = ({ type }) => {
  const id = useParams().id;

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [categoria, setCategoria] = useState({} as CategoriaSchema);

  useEffect(() => {
    if (id)
      (async () => {
        const categoria = await categoriaService.getById(Number(id));
        if (!categoria) navigate("/categorias");
        setCategoria(categoria as CategoriaSchema);
        setIsLoading(false);
      })();
  }, [id, navigate]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (type === "criar") {
      await categoriaService.create(categoria);
    } else if (type === "atualizar") {
      await categoriaService.update(Number(id), categoria);
    }

    navigate("/categorias");
  };
  return (
    <Container>
      {categoria ? (
        <div className="flex flex-col gap-10 text-center p-5 rounded-xl h-full shadow-2xl w-2/5 mx-auto my-auto">
          <h2 className="text-3xl text-bold text-center">
            {type === "criar" ? "Criar" : "Atualizar"} Categoria
          </h2>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-5"
          >
            <label className="" htmlFor="">
              Nome da Categoria:
            </label>
            <input
              className="w-full min-h-8 border border-gray-500 px-4 py-2 rounded-xl"
              type="text"
              value={categoria.nome}
              required
              onChange={(e) =>
                setCategoria({ ...categoria, nome: e.target.value })
              }
            />
            <button
              className={`w-full bg-blue-500 rounded-xl min-h-7 p-4   font-semibold   ${
                type === "criar"
                  ? "bg-green-500 hover:bg-green-600"
                  : " bg-blue-500 hover:bg-blue-700"
              }`}
              type="submit"
            >
              {isLoading ? (
                <CircleNotch
                  className={`w-full animate-spin self-center`}
                  size={28}
                />
              ) : type === "criar" ? (
                "Criar"
              ) : (
                "Atualizar"
              )}
            </button>
          </form>
        </div>
      ) : (
        <img src="/svg/logo.svg" className="animate-bounce" alt="" />
      )}
    </Container>
  );
};

export default FormCategoria;
