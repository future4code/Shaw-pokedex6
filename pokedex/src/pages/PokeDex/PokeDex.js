import React from 'react'
import { useNavigate } from "react-router-dom";
import { toHome, toDetails } from '../../router/Coordinator';
import { HeaderPokedex } from '../../components/Header/HeaderPokedex';



export const PokeDex = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderPokedex />
      {/* <button onClick={() => toHome(navigate)}>Home</button>
      <button onClick={() => toDetails(navigate) }>Details</button> */}      
    </div>
  )
}
