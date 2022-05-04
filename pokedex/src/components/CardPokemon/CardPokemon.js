import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {MainContainer, Card} from './styled'
import {toDetails} from '../../router/Coordinator'

export const CardPokemon = (props) => {
  const navigate = useNavigate()
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
      <img src={imagem} alt={`Foto do pokemon ${pokemon.name}`} />
      <div>
        <button>Adicionar a PokéDex</button>
        <button onClick={()=> toDetails(navigate,pokemon.name)}>Ver detalhes</button>
      </div>
    </Card>
  </MainContainer>
);
}

