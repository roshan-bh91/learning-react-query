import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};
const RQParallelQueries = () => {
  const { data: superhero_data } = useQuery(
    ["superheroes-pq"],
    fetchSuperheroes
  );
  const { data: friends_data } = useQuery(["friends-pq"], fetchFriends);
  return (
    <div>
      <h4>Parallel Queries</h4>
      {/* Code for non transformed data */}
      <>
        {superhero_data?.data.length === 0 ? (
          <h4>No superhero found</h4>
        ) : (
          <ul>
            {superhero_data?.data.map((everySuperhero) => {
              return (
                <div key={everySuperhero.superhero_id}>
                  <p>{everySuperhero.superhero_name}</p>
                  {/* <Link
                    to={`/rq-superheroes-page/${everySuperhero.superhero_id}`}
                  >
                    Check here
                  </Link> */}
                </div>
              );
            })}
          </ul>
        )}
      </>
      {/* Code for non transformed data */}
      <>
        {friends_data?.data.length === 0 ? (
          <h4>No friends found</h4>
        ) : (
          <ul>
            {friends_data?.data.map((everySuperhero) => {
              return (
                <div key={everySuperhero.id}>
                  <p>{everySuperhero.name}</p>
                  {/* <Link
                    to={`/rq-superheroes-page/${everySuperhero.superhero_id}`}
                  >
                    Check here
                  </Link> */}
                </div>
              );
            })}
          </ul>
        )}
      </>
    </div>
  );
};
export { RQParallelQueries };
