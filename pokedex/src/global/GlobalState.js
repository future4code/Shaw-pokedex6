import React from "react";
import { GlobalContext } from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Base_url";

export default function GlobalState(props) {
  const listPokemon = useRequestData(`${BASE_URL}`)

  const states = { listPokemon}

  return (
    <GlobalContext.Provider value={{ states }}>
      {props.children}
    </GlobalContext.Provider>
  );
}