import { useQuery } from "react-query";
import axios from "axios";
const fetchSingleSuperheroDetails = ({ queryKey }) => {
  const superhero_id = queryKey[1];
  return axios.get(
    `http://localhost:4000/superheroes?superhero_id=${superhero_id}`
  );
};
const useSingleSuperheroData = (superhero_id) => {
  return useQuery(["super-hero", superhero_id], fetchSingleSuperheroDetails);
};
export { useSingleSuperheroData };
