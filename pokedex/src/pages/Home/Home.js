import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { toDetails, toPokeDex } from '../../router/Coordinator';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { ListPoke } from './styled';
import { GlobalContext } from '../../global/GlobalContext';

export const Home = () => {
  const navigate = useNavigate();
  const  {states}  = useContext(GlobalContext);
  const listName = states.listPokemon;

  return (
    <div>
      <p>Home</p>
      <button onClick={() => toPokeDex(navigate)}>Pokedex</button>
      <button onClick={() => toDetails(navigate)}>Details</button>
      <ListPoke>
        {listName &&
          listName.map((poke) => {
            return <CardPokemon key={poke.name} pokeName={poke.name} />;
          })
        }
      </ListPoke>
    </div>
  );
};
