import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQSuperheroesPage = () => {
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
    }
  );
  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h4>Loading...</h4>;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }
  return (
    <>
      <h4>React query superheroes page</h4>
      <button onClick={refetch}>FETCH SUPERHEROES</button>
      {data?.data.length === 0 ? (
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
      )}
    </>
  );
};
export { RQSuperheroesPage };
