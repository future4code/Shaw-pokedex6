import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { toBack} from '../../router/Coordinator';
import { MainContainer, Conteudo, StatusContainer, StatusBox, Display, Type } from './styeld';

export const Details = () => {
  const [ pokemon, setPokemon] = useState({});
  const [ imagemFront, setImageFront] = useState({})
  const [ imagemBack, setImageBack] = useState({})
  const [ listType, setlistType] = useState([])
  const [ listStats, setlistStats] = useState([])
  const [ listAbilities, setlistAbilities] = useState([])
  const navigate = useNavigate();
  const pokeName = useParams()

  const detalhes = async() => {
    await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.name}`)
    .then((res) => {
      setPokemon(res.data);
      console.log(res.data)
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
    detalhes()
  }, []);

  return (
    <MainContainer>
        {pokeName && pokemon && pokemon.name ? 
          <Conteudo>
            <div className='Spheres'>
              <div className='Sphere'></div>
              <div className='Sphere1'></div>
              <div className='Sphere2'></div>
              <div className='Sphere3'></div>
            </div>
            <button  className='out' onClick={()=> toBack(navigate)}>X</button>
            <Display>
              <div className='Imagens'>
                <img className='img1' src={imagemBack} alt={`${pokemon.name} back`}></img>
                <img className='img2' src={imagemFront} alt={`${pokemon.name} front`}></img>
              </div>
              <div className='NameNumber'>
                <p>#{pokemon.id}</p>
                <p>{pokemon.name[0].toUpperCase()}{pokemon.name.slice(1)}</p>
              </div>
            </Display>
            <div className='types'>
              <h2>Type: </h2>
                {listType.map((poke,i)=>{
                  return(
                    <Type key={i} color={listType[i].type.name}>{listType[i].type.name}</Type>
                  )
                })}
            </div>
            <h3>Height: {pokemon.height}0 cm</h3>
            <h3>Weight: {pokemon.weight} lbs</h3>
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
            <h2>Moves</h2>
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
