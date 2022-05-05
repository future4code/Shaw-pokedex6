import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { toDetails, toPokeDex } from '../../router/Coordinator';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { ListPoke } from './styled';
import { GlobalContext } from '../../global/GlobalContext';

<<<<<<< HEAD

export const Home = (props) => {
=======
export const Home = () => {
>>>>>>> 20669cfa336b221a7a605fc919cc471827ac0343
  const navigate = useNavigate();
  const  { requests}  = useContext(GlobalContext);
  const listName = requests.listPokemon;

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
