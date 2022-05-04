import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {MainContainer, Card} from './styled'

export const CardPokemon = (props) => {
  const [ pokemon, setPokemon] = useState([]);
  const [ imagem, setImage] = useState({})

  const carregar = async() => { 
    await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
    .then((res) => {
      setPokemon(res.data);
      setImage(res.data.sprites.other["official-artwork"].front_default)
    })
    .catch((err) => {
      alert("Houve um erro, tenta novamente!")
    });
  }

useEffect(() => {
  carregar()
}, []);



return (
  <MainContainer>
    <Card>
      <img src={imagem} alt={`Foto do pokemon ${pokemon.nome}`} />
      <div>
        <button>Adicionar a PokéDex</button>
        <button>Ver detalhes</button>
      </div>
    </Card>
  </MainContainer>
);
}

