import React, {useContext} from  'react'
import { useParams } from "react-router-dom";
import { Header } from '../../components/Header/Header';
import { GlobalContext } from '../../global/GlobalContext';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { ListPoke } from './styled';
import { Details } from '../Details/Details';

export const PokeDex = () => {
  const {states} = useContext(GlobalContext);
  const pokedex = states.pokedex
  const params = useParams()

  const Pokedex = pokedex.map((item) => {
    return (
      <CardPokemon key={item.name} pokeName={item.name} button={"Remover da Pokedex"}/>
    )
  })

  return (
    <div>
      {params.name ? <Details/> : null}
      <Header/>
      <ListPoke>
        {Pokedex}
      </ListPoke>    
    </div>
  )
}