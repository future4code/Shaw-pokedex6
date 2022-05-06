import React, {useContext} from  'react'
import { useParams } from "react-router-dom";
import { Header } from '../../components/Header/Header';
import { GlobalContext } from '../../global/GlobalContext';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { MainContainer, ListPoke } from './styled';
import { Details } from '../Details/Details';

export const PokeDex = () => {
  const {states} = useContext(GlobalContext);
  const pokedex = (states.pokedex).sort((a,b) => a.id - b.id)//ordenando o array 
  const params = useParams()

  const Pokedex = pokedex.map((item) => {
    return (
      <CardPokemon key={item.name} pokeName={item.name} button={"Remover da Pokedex"}/>
    )
  })

  return (
    <MainContainer>
      {params.name ? <Details/> : null}
      <Header/>
      <ListPoke>
        {Pokedex}
      </ListPoke>    
    </MainContainer>
  )
}