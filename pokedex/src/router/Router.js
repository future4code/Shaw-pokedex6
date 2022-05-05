import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {PokeDex} from "../pages/PokeDex/PokeDex";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:page" element={<PokeDex />} />
        <Route path="/details/:name" element={<Home/>} />
        <Route path="/:page/details/:name" element={<PokeDex />} />
      </Routes>
    </BrowserRouter>
  );
};