import { CategoriaSchema } from "../../schemas/categoria.schema";
import { api } from "../../utils/http/http";

const getAll = async () => {
  try {
    const res = await api.get<CategoriaSchema[]>("/categorias");
    console.log(res);
    if (res.status !== 200) throw new Error(JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id: number) => {
  try {
    const res = await api.get<CategoriaSchema>(`/categorias/${id}`);
    if (res.status !== 200) throw new Error(JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const create = async (data: Omit<CategoriaSchema, "id">) => {
  try {
    const res = await api.post<CategoriaSchema>("/categorias", data);
    if (res.status !== 201) throw new Error(JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const update = async (id: number, data: Partial<CategoriaSchema>) => {
  const categoria = {
    ...data,
    id: id,
  };
  try {
    const res = await api.put<CategoriaSchema>(`/categorias/`, categoria);
    if (res.status !== 200) throw new Error(JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (id: number) => {
  try {
    const res = await api.delete<CategoriaSchema>(`/categorias/${id}`);
    if (res.status !== 204) throw new Error(JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const categoriaService = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
