import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {MainContainer, Card} from './styled'
import {toDetails, toDetailsPokeDex} from '../../router/Coordinator'
import { GlobalContext } from '../../global/GlobalContext';

export const CardPokemon = (props) => {
  const navigate = useNavigate()
  const params = useParams()
  const [ pokemon, setPokemon] = useState([]);
  const [ image, setImage] = useState([])
  const [ type, setType] = useState([])
  const {states, setter, requests}  = useContext(GlobalContext);
  const {listPokemon, setListPokemon} = requests
  const pokedex = states.pokedex
  const setPokedex = setter.setPokedex

  const listDetailsPokemon = async() => { 
    await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
    .then((res) => {
      setPokemon(res.data);
      setType(res.data.types[0].type.name)
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
    const hasPokemonInPokedex = pokedex.find((item)=> item.name === pokemon.name)
    if(hasPokemonInPokedex) {
      const newPokedex = pokedex.filter((item) => {
        return (
          item.name !== pokemon.name
        )
      })
      setPokedex(newPokedex)
      setListPokemon([...listPokemon, pokemon].sort((a,b) => a.id - b.id))
      return
    }
    setPokedex([...pokedex, pokemon])
    const newPokemonList = listPokemon.filter((item) => {
      return (
        item.name !== pokemon.name
      )
    })  
    setListPokemon(newPokemonList.sort((a,b) => a.id - b.id))
  }

return (
  <MainContainer>
    <Card  color={type}>
      <p className='number'>#{pokemon.id}</p>
      <div className='imagen'>
        <img src={image} alt={`Foto do pokemon ${pokemon.name}`} />
      </div>
      <p><strong>{pokemon && pokemon.name && pokemon.name.toUpperCase()}</strong></p>
      <div>
        <button onClick={() => addPokedex(pokemon)} >{props.button}</button>
        {params.page === 'pokedex' ? 
        <button onClick={()=> toDetailsPokeDex(navigate,'pokedex', pokemon.name)}>See detais</button>
        :
        <button onClick={()=> toDetails(navigate, pokemon.name)}>See detais</button>}
      </div>
    </Card>
  </MainContainer>
);
}

