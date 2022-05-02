import React from 'react'
import { useNavigate } from "react-router-dom";
import { toDetails, toPokeDex } from '../../router/Coordinator';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>Home
      <button onClick={() => toPokeDex(navigate)} >Pokedex</button>
      <button onClick={() => toDetails(navigate)} >Details</button>

    </div>
  )
}
