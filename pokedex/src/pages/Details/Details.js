import React from 'react'
import { useNavigate } from "react-router-dom";
import { toBack} from '../../router/Coordinator';


export const Details = () => {
  const navigate = useNavigate();

  return (
    <div>Details
      <button onClick={()=> toBack(navigate)}>Voltar</button>
    </div>
  )
}
