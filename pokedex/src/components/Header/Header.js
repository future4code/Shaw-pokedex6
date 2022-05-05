import React from 'react'
import {Container, ListPoke} from "./HeaderStyle"
import {toHome, toPokeDex } from "../../router/Coordinator"
import { useNavigate, useParams } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <Container>
      {params.page === 'pokedex' ?
      <div>
        <h2> Pokedex </h2>
        <ListPoke>
        <button onClick={() => toHome(navigate)}>Back to Home</button>
        </ListPoke>
      </div> 
      : 
      <div>
        <h2> List of Pokemons </h2>
        <ListPoke>
        <button onClick={() => toPokeDex(navigate,"pokedex")}>Pokedex</button>
        </ListPoke>
      </div>}
    </Container>
  )
}

