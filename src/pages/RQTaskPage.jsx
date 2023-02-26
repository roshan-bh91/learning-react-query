import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const RQTaskPage = () => {
  const [refetchIntervalValue, updateRefetchIntervalValue] = useState(4000);
  const onSuccess = (response_received) => {
    if (response_received.data.length === 4) {
      updateRefetchIntervalValue(false);
    }
  };
  const onError = (error_details) => {
    updateRefetchIntervalValue(false);
  };
  const fetchSuperheroes = () => {
    return axios.get("http://localhost:4000/superheroes-rectified");
  };
  const { isLoading, isError, error, data } = useQuery(
    ["superheroes"],
    fetchSuperheroes,
    {
      refetchInterval: refetchIntervalValue,
      refetchIntervalInBackground: refetchIntervalValue,
      onSuccess,
      onError,
    }
  );
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }

  return (
    <div>
      <h4>React Task</h4>
      {data?.data.length === 0 ? (
        <h4>NO superheroes found</h4>
      ) : (
        <ul>
          {data?.data.map((everySuperhero) => {
            return (
              <li key={everySuperhero.superhero_id}>
                {everySuperhero.superhero_name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export { RQTaskPage };
