import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes_collection");
};

const getParticularSuperheroData = (particular_hero_id) => {
  return axios.get(
    `http://localhost:4000/superheroes_collection/${particular_hero_id}`
  );
};

const addNewSuperhero = (heroDetails) => {
  return axios.post(
    "http://localhost:4000/superheroes_collection",
    heroDetails
  );
};

const useSuperheroesCollection = () => {
  return useQuery(["super-hero"], fetchSuperheroes, {
    onSuccess: (api_response) => {
      console.log("The query has been executed successfully", api_response);
    },
  });
};

const useParticularSuperheroData = (given_hero_id) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["particular_super_hero", given_hero_id],
    () => getParticularSuperheroData(given_hero_id),
    {
      initialData: () => {
        const specific_hero_details = queryClient
          .getQueryData(["super-hero"])
          ?.data.find((everySuperhero) => everySuperhero.id === given_hero_id);
        if (specific_hero_details) {
          return specific_hero_details;
        } else {
          return undefined;
        }
      },
    }
  );
};

const useAddSuperheroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewSuperhero, {
    onSuccess: () => {
      queryClient.invalidateQueries(["super-hero"]);
    },
  });
};

export {
  useSuperheroesCollection,
  useAddSuperheroData,
  useParticularSuperheroData,
};
