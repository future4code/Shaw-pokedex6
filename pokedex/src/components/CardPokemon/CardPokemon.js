import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {MainContainer, Card} from './styled'
<<<<<<< HEAD
=======
import {toDetails} from '../../router/Coordinator'
>>>>>>> 20669cfa336b221a7a605fc919cc471827ac0343
import { GlobalContext } from '../../global/GlobalContext';

export const CardPokemon = (props) => {
  const navigate = useNavigate()
  const [ pokemon, setPokemon] = useState([]);
  const [ imagem, setImage] = useState([])
  const  {states}  = useContext(GlobalContext);
   const  {setter}  = useContext(GlobalContext);
   const pokedex = states.pokedex
   const setPokedex = setter.setPokedex


  const listDetailsPokemon = async() => { 
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
  listDetailsPokemon()
}, []);

const addPokedex = (pokemon) => {
  setPokedex([...pokedex, pokemon])
}

return (
  <MainContainer>
    <Card>
      <img src={imagem} alt={`Foto do pokemon ${pokemon.name}`} />
      <div>
<<<<<<< HEAD
        <button onClick={()=> props.setToPokedex()}>Adicionar a PokéDex</button>
        <button>Ver detalhes</button>
=======
        <button onClick={() => addPokedex(pokemon, imagem)} >Adicionar a PokéDex</button>
        <button onClick={()=> toDetails(navigate, pokemon.name)}>Ver detalhes</button>
>>>>>>> 20669cfa336b221a7a605fc919cc471827ac0343
      </div>
    </Card>
  </MainContainer>
);
}

