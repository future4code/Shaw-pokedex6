import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toDetails, toPokeDex } from '../../router/Coordinator';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { ListPoke } from './styled';

export const Home = () => {
  const navigate = useNavigate();
  const [listName, setListName] = useState("");

  const getPokemon = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setListName(res.data.results);
        console.log(res.data.results)
      })
      .catch((err) => {
        alert("Houve alguem erro, tenta novamente");
      });
  };
  
  useEffect(() => {
    getPokemon();
  }, []);

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
