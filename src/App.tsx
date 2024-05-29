import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home.page";
import Categorias from "./components/pages/categorias.page";
import Model from "./components/molecules/model/index.model";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Model />}>
          <Route index element={<HomePage />} />
          <Route path="categorias" element={<Categorias />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
