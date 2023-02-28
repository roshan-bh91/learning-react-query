import axios from "axios";
import { useQueries } from "react-query";
const fetchSuperheroData = (superhero_id) => {
  return axios.get(
    `http://localhost:4000/superheroes?superhero_id=${superhero_id}`
  );
};
const RQDynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((everyId) => {
      return {
        queryKey: ["super-hero-id", everyId],
        queryFn: () => fetchSuperheroData(everyId),
      };
    })
  );
  console.log({ queryResults });
  return <div>Dynamic Parallel Queries</div>;
};
export { RQDynamicParallelPage };
