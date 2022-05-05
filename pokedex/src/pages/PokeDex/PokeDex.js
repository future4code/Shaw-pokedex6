import React, {useContext} from  'react'
import { useNavigate } from "react-router-dom";
import { toHome, toDetails } from '../../router/Coordinator';
import { HeaderPokedex } from '../../components/Header/HeaderPokedex';
import { GlobalContext } from '../../global/GlobalContext';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';



export const PokeDex = () => {
  const {states} = useContext(GlobalContext);
  const pokedex = states.pokedex
  const navigate = useNavigate();

  const Pokedex = pokedex.map((item) => {
    return (
      <CardPokemon key={item.name} pokeName={item.name} button={"Remover da Pokedex"}/>
    )
  })


  return (
    <div>
      <HeaderPokedex />
      {Pokedex}
      {/* <button onClick={() => toHome(navigate)}>Home</button>
      <button onClick={() => toDetails(navigate) }>Details</button> */}      
    </div>
  )
}
