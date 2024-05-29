import { CategoriaSchema } from "./categoria.schema";

export type ProdutoSchema = {
  id: number;
  nome: string;
  preco: number;
  foto: string;
  categoria: CategoriaSchema;
};
