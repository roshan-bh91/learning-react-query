import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { request } from "../utils/axios-utils";
// request

const fetchSuperheroes = () => {
  // return axios.get("http://localhost:4000/superheroes_collection");
  return request({ url: `/superheroes_collection` });
};

const getParticularSuperheroData = (particular_hero_id) => {
  // return axios.get(
  //   `http://localhost:4000/superheroes_collection/${particular_hero_id}`
  // );
  return request({ url: `/superheroes_collection/${particular_hero_id}` });
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
    // onSuccess: (new_introduced_data) => {
    //   // queryClient.invalidateQueries(["super-hero"]); [For invalidating queries]
    //   queryClient.setQueryData(["super-hero"], (previousCacheData) => {
    //     return {
    //       ...previousCacheData,
    //       data: [...previousCacheData.data, new_introduced_data.data],
    //     };
    //   });
    // },
    // For optimistic updates above approach makes extra network call so need to shift to
    onMutate: async (newHeroDetails) => {
      await queryClient.cancelQueries(["super-hero"]);
      const previousQueryData = queryClient.getQueryData(["super-hero"]);
      queryClient.setQueryData(["super-hero"], (previousData) => ({
        ...previousData,
        data: [
          ...previousData.data,
          { ...newHeroDetails, id: crypto.randomUUID() },
        ],
      }));
      return { previousQueryData };
    },
    // This method is called if the mutation encounters an error
    onError: (
      _error,
      _current_info /* Variables passed into the mutation */,
      context
    ) => {
      queryClient.setQueryData(["super-hero"], context?.previousQueryData);
    },
    // This method is called if the mutation is either successful or when an error occurs
    // here we fetch the superheroes to the query client
    onSettled: () => {
      queryClient.invalidateQueries(["super-hero"]);
    },
  });
};

export {
  useSuperheroesCollection,
  useAddSuperheroData,
  useParticularSuperheroData,
};
