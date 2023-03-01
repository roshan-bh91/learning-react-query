import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const useSuperHeroesData = ({ onSuccess, onError }) => {
  return useQuery(["superheroes"], fetchSuperheroes, {
    // cacheTime:5000,/* default value is 5 minutes */,
    // staleTime:30000
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval:4000
    // refetchIntervalInBackground: 4000
    onSuccess,
    onError,
    // refetchInterval: false,
    enabled: false,
    // select: (api_response) => {
    //   const superhero_names = api_response.data.map((everySuperhero) => {
    //     return {
    //       superhero_id: everySuperhero.superhero_id,
    //       superhero_name: everySuperhero.superhero_name,
    //     };
    //   });
    //   return superhero_names;
    // },
  });
};
export { useSuperHeroesData };
