import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Base_url";

export default function GlobalState(props) {
  const result = useRequestData(`${BASE_URL}`)
  const [ pokemon, setPokemon] = useState([])
  const [ pokedex, setPokedex] = useState([])
  const [listPokemon, setListPokemon] = useState(result)

  useEffect(()=>{
    if(result && result.length > 0){
      setListPokemon(result)
      console.log("Result", result);
    }
  },[result])

  const states = { pokemon, pokedex}
  const setter = {setPokemon, setPokedex}
  const requests = { listPokemon, setListPokemon }

  return (
    <GlobalContext.Provider value={{ states, setter, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
}