import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQSuperheroesPage = () => {
  const onSuccess = (response_details) => {
    console.log("Side effect after successful API query", response_details);
  };
  const onError = (error_details) => {
    console.log("Side effect after error occurred", error_details);
  };

  // const generate_superhero_names = (response_received) => {
  //   const superhero_names = response_received.data.map((everySuperhero) => {
  //     return {
  //       superhero_id: everySuperhero.superhero_id,
  //       superhero_name: everySuperhero.superhero_name,
  //     };
  //   });
  //   return superhero_names;
  // };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ["superheroes"],
    fetchSuperheroes,
    {
      // cacheTime:5000,/* default value is 5 minutes */,
      // staleTime:30000
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval:4000
      // refetchIntervalInBackground: 4000,
      enabled: false,
      onSuccess,
      onError,
      select: (api_response) => {
        console.log(api_response);
        const superhero_names = api_response.data.map((everySuperhero) => {
          return {
            superhero_id: everySuperhero.superhero_id,
            superhero_name: everySuperhero.superhero_name,
          };
        });
        console.log(superhero_names);
        return superhero_names;
      },
    }
  );
  if (isLoading || isFetching) {
    return <h4>Loading...</h4>;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }
  console.log(data);
  return (
    <>
      <h4>React query superheroes page</h4>
      <button onClick={refetch}>FETCH SUPERHEROES</button>
      <>
        {data?.length === 0 ? (
          <h4>No superhero found</h4>
        ) : (
          <ul>
            {data?.map((everySuperhero) => {
              return (
                <li key={everySuperhero.superhero_id}>
                  {everySuperhero.superhero_name}
                </li>
              );
            })}
          </ul>
        )}
      </>
      <>
        {/* {data?.data.length === 0 ? (
          <h4>No superhero found</h4>
        ) : (
          <ul>
            {data?.data.map((everySuperhero) => {
              return (
                <p key={everySuperhero.superhero_id}>
                  {everySuperhero.superhero_name}
                </p>
              );
            })}
          </ul>
        )} */}
      </>
    </>
  );
};
export { RQSuperheroesPage };
