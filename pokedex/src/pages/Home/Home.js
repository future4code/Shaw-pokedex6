import React, { useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { ListPoke } from './styled';
import { GlobalContext } from '../../global/GlobalContext';
import { Header } from '../../components/Header/Header';
import { Details } from '../Details/Details';

export const Home = () => {
  const params = useParams()
  console.log(params);
  const  { requests: { listPokemon}}  = useContext(GlobalContext);
  // const  { requests}  = useContext(GlobalContext);
  // const listName = requests.listPokemon;

  return (
    <div>
      {params.name ? <Details/> : null}
      <Header/>
      <ListPoke>
        {listPokemon &&
          listPokemon.map((poke) => {
            return <CardPokemon key={poke.name} pokeName={poke.name} button={"Adicionar a PokéDex"} />;
          })
        }
      </ListPoke>
    </div>
  );
};
