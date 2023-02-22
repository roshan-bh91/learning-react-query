import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQSuperheroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["superheroes"],
    fetchSuperheroes
  );
  console.log({ isLoading, isFetching });
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }
  return (
    <>
      <h4>React query superheroes page</h4>
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
