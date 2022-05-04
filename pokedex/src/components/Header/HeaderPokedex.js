import React from 'react'
import {Container, ListPoke} from "../Header/HeaderStyle"
import {toHome, toDetails } from "../../router/Coordinator"
import { useNavigate } from 'react-router-dom'



export const HeaderPokedex = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <h2> Lista de Pokémons </h2>
      <ListPoke>
      <button onClick={() => toHome(navigate)}>Voltar para lista de pokemons</button>
      </ListPoke>
      {/* <button onClick={() => toDetails(navigate) }>Details</button> */}
      </Container>
  )
}

