import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroesNow = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const useSuperheroDataHook = (options) => {
  return useQuery(["superheroes-data"], fetchSuperheroesNow, {
    ...options,
  });
};
export { useSuperheroDataHook };
