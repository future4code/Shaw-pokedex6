import React from 'react'
import { useNavigate } from "react-router-dom";
import { toHome, toDetails } from '../../router/Coordinator';



export const PokeDex = () => {
  const navigate = useNavigate();

  return (
    <div>PokeDex
      <button onClick={() => toHome(navigate)}>Home</button>
      <button onClick={() => toDetails(navigate) }>Details</button>
    </div>
  )
}
