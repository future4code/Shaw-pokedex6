import React from 'react'
import {Container, ButtonHome, ButtonDex} from "./HeaderStyle"
import {toHome, toPokeDex } from "../../router/Coordinator"
import { useNavigate, useParams } from 'react-router-dom'
import pokelist from '../../assets/img/pokelist.png'
import pokedex from '../../assets/img/pokedex.png'
import home from '../../assets/img/home.png'

export const Header = () => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <Container>
      {params.page === 'pokedex' ?
      <div>
        <img className='logo' src={pokedex} alt='Logo PokeDex'/>
        <ButtonDex onClick={() => toHome(navigate)}>
          <img src={home}/>
          <button>Back to Home</button>
        </ButtonDex>
      </div> 
      : 
      <div>
        <img className='logo' src={pokelist} alt='Logo PokeList'/>
        <ButtonHome onClick={() => toPokeDex(navigate,"pokedex")}>
          <button>Pokedéx</button>
        </ButtonHome>
      </div>}
    </Container>
  )
}

