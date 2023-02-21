import { useEffect, useState } from "react";
import axios from "axios";
const SuperheroesPage = () => {
  const [isLoading, updateIsLoading] = useState(true);
  const [superheroesList, updateSuperheroesList] = useState([]);
  const getAllSuperheroes = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/superheroes");
      updateIsLoading(false);
      updateSuperheroesList(data);
    } catch (error) {
      console.error("An error occured");
    }
  };
  useEffect(() => {
    getAllSuperheroes();
  }, []);
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  return (
    <div>
      <h4>Superheroes Traditional fetching</h4>
      {superheroesList.length === 0 ? (
        <h4>No superhero found</h4>
      ) : (
        <ul>
          {superheroesList.map((everySuperhero) => {
            return (
              <p key={everySuperhero.superhero_id}>
                {everySuperhero.superhero_name}
              </p>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export { SuperheroesPage };
