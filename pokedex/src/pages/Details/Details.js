import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { toBack} from '../../router/Coordinator';
import { MainContainer, Conteudo, StatusContainer, StatusBox } from './styeld';

export const Details = () => {
  const [ pokemon, setPokemon] = useState({});
  const [ imagemFront, setImageFront] = useState({})
  const [ imagemBack, setImageBack] = useState({})
  const [ listType, setlistType] = useState([])
  const [ listStats, setlistStats] = useState([])
  const [ listAbilities, setlistAbilities] = useState([])
  const navigate = useNavigate();
  const pokeName = useParams()

  const carregar = async() => {
    await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.name}`)
    .then((res) => {
      setPokemon(res.data);
      setImageFront(res.data.sprites.versions["generation-v"]["black-white"].animated.front_default)
      setImageBack(res.data.sprites.versions["generation-v"]["black-white"].animated.back_default)
      setlistType(res.data.types)
      setlistStats(res.data.stats)
      setlistAbilities(res.data.abilities)
    })
    .catch((err) => {
      alert("Houve um erro, tenta novamente!")
    });
  }

  useEffect(() => {
    carregar()
  }, []);

  return (
    <MainContainer>Details
        <button onClick={()=> toBack(navigate)}>Voltar</button>
        {pokeName && pokemon && pokemon.name ? 
          <Conteudo>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <div className='Imagens'>
              <img className='img1' src={imagemBack} alt={`${pokemon.name} back`}></img>
              <img className='img2' src={imagemFront} alt={`${pokemon.name} front`}></img>
            </div>
            <h2>Type</h2>
            <div className='types'>
              {listType.map((poke,i)=>{
                return(
                  <p key={i}>{listType[i].type.name.toUpperCase()}</p>
                )
              })}
            </div>
            {listType.map}
            <h2>Status</h2>
            <StatusContainer>
              <StatusBox>
                <p><strong>HP: </strong>{listStats[0].base_stat} </p>
                <p><strong>Attack: </strong>{listStats[1].base_stat}</p>
                <p><strong>Def: </strong>{listStats[2].base_stat}</p>
              </StatusBox>
              <StatusBox>
                <p><strong>Special-Atk: </strong>{listStats[3].base_stat} </p>
                <p><strong>Special-Def: </strong>{listStats[4].base_stat} </p>
                <p><strong>Speed: </strong>{listStats[5].base_stat}</p>
              </StatusBox> 
            </StatusContainer>
            <h1>Moves</h1>
              {listAbilities.map((poke,i)=>{
                return(
                  <p key={i}>{listAbilities[i].ability.name.toUpperCase()}</p>
                )
              })}
         </Conteudo>
        : null}
    </MainContainer>
  )
}
