import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {PokeDex} from "../pages/PokeDex/PokeDex";
import {Details} from "../pages/Details/Details";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokedex" element={<PokeDex />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};