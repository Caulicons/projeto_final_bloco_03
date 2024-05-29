import { FC } from "react";
import { CategoriaSchema } from "../../../../schemas/categoria.schema";
import { Link } from "react-router-dom";

interface CategoriaCardProps {
  categoria: CategoriaSchema;
}

const CategoriaCard: FC<CategoriaCardProps> = ({ categoria: { id, nome } }) => {
  return (
    <div className="flex flex-col items-center min-w-[300px]">
      <div className="flex flex-col items-center  p-4 bg-slate-600 rounded-t-md text-white  font-semibold text-xl w-full">
        <h4>{nome}</h4>
      </div>
      <div className="flex w-full  justify-between align-middle text-center   ">
        <Link
          to={`/editar-categoria/${id}`}
          className="hover:underline bg-yellow-300 w-full p-4 self-center h-full rounded-bl-lg font-semibold"
        >
          Editar
        </Link>
        <Link
          to={`/deletar-categoria/${id}`}
          className="bg-red-400 w-full p-4 rounded-br-xl font-semibold hover:underline"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
};

export default CategoriaCard;
