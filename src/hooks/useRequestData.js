import { useEffect, useState } from 'react'
import axios from "axios";

const useRequestData = url => {
  const [data, setData] = useState();

  const getListPokemon = async () => {
    try {
      const { data } = await axios.get(url);
      const newArray = [];
      const promises = data.results.map(async item => {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${item.name}`,
        );
        newArray.push(data);
      });
      await Promise.all(promises);
      setData(newArray.sort((a,b) => a.id - b.id));
    } catch (error) {
      alert('Houve alguem erro, tenta novamente');
    }
    return [];
  };

  useEffect(() => {
    getListPokemon();
  }, [url]);

  return data;
};

export default useRequestData;