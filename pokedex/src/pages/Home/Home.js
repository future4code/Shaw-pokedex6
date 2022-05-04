import React from 'react'
import { useNavigate } from "react-router-dom";
import { toDetails, toPokeDex } from '../../router/Coordinator';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';
import { BASE_URL} from '../../constants/Base_url'
import useRequestData from '../../hooks/useRequestData';


export const Home = () => {
  const navigate = useNavigate();
  const listName = useRequestData(`${BASE_URL}`)
  // const [listName, setListName] = useState("");

  // const getPokemon = async () => {
  //   await axios
  //     .get("https://pokeapi.co/api/v2/pokemon/")
  //     .then((res) => {
  //       setListName(res.data.results);
  //     })
  //     .catch((err) => {
  //       alert("Houve alguem erro, tenta novamente");
  //     });
  // };

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  return (
    <div>
      <p>Home</p>
      <button onClick={() => toPokeDex(navigate)}>Pokedex</button>
      <button onClick={() => toDetails(navigate)}>Details</button>
      {listName &&
        listName.map((poke) => {
          return <CardPokemon key={poke.name} pokeName={poke.name} />;
        })}
    </div>
  );
};
