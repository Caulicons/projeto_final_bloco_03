import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home.page";
import Categorias from "./components/pages/categorias.page";
import Model from "./components/molecules/model/index.model";
import FormCategoria from "./components/molecules/categorias/formCategoria/index.formCategoria";
import DeletarCategoria from "./components/molecules/categorias/deletarCategora/index.deletarCategoria";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Model />}>
          <Route index element={<HomePage />} />
          <Route path="categorias" element={<Categorias />} />
          <Route
            path="/editar-categoria/:id"
            element={<FormCategoria type="atualizar" />}
          />
          <Route
            path="/criar-categoria/"
            element={<FormCategoria type="criar" />}
          />
          <Route path="/deletar-categoria/:id" element={<DeletarCategoria />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
