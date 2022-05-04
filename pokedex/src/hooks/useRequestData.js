import { useEffect, useState } from 'react'
import axios from "axios";

const useRequestData = (url) => {
  const [data, setData] = useState();


  useEffect(() => {
     axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        alert("Houve alguem erro, tenta novamente");
      });
  }, [url]);
  return data;
}

export default useRequestData;