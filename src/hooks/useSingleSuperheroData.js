import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
const fetchSingleSuperheroDetails = ({ queryKey }) => {
  const superhero_id = queryKey[1];
  return axios.get(
    `http://localhost:4000/superheroes?superhero_id=${superhero_id}`
  );
};
const useSingleSuperheroData = (superhero_id) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", superhero_id], fetchSingleSuperheroDetails, {
    initialData: () => {
      const hero_details = queryClient
        .getQueryData(["superheroes"])
        ?.data.find((everyHero) => everyHero.superhero_id === superhero_id);
      if (hero_details) {
        return { data: [hero_details] };
      } else {
        return undefined;
      }
    },
  });
};
export { useSingleSuperheroData };
