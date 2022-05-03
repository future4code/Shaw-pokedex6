import React from 'react'
import { useNavigate } from "react-router-dom";
import { toBack} from '../../router/Coordinator';
import { MainContainer, Conteudo, StatusContainer, StatusBox } from './styeld';

export const Details = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>Details
        <button onClick={()=> toBack(navigate)}>Voltar</button>
      <Conteudo>
        <div className='Imagens'>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/94.gif'></img>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif'></img>
        </div>
        <h1>Gengar</h1>
        <h2>Type</h2>
        <h2>Status</h2>
        <StatusContainer>
          <StatusBox>
            <p>HP: </p>
            <p>Attack: </p>
            <p>Def: </p>
          </StatusBox>
          <StatusBox>
            <p>Special-Atk: </p>
            <p>Special-Def: </p>
            <p>Speed: </p>
          </StatusBox> 
        </StatusContainer>
        <h1>Moves</h1>
        <p>mega-punch</p>
        <p>fire-punch</p>
        <p>thunder-punch</p>
      </Conteudo>
    </MainContainer>
  )
}
