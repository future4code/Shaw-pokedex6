import React from "react";
import { GlobalContext } from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Base_url";
import { CardPokemon } from "../components/CardPokemon/CardPokemon";

export default function GlobalState(props) {
  const listPokemon = useRequestData(`${BASE_URL}`)

  const states = { listPokemon}

  const setToPokedex = () => {
    const newPokedex = [...props.pokemon, listPokemon ]
    props.setPokemon(newPokedex)

    const newPokeList = props.pokemon.filter((item) => {
      return item.name != listPokemon.name
    })
    props.setPokemon(newPokeList)
  }
  console.log(setToPokedex);
  return (
    <GlobalContext.Provider value={{ states }}>
      {props.children}
    </GlobalContext.Provider>
  );
}