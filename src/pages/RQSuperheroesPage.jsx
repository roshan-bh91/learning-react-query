import { useSuperheroDataHook, useSuperHeroesData } from "../hooks";
import { useState } from "react";
import { ViewComponent } from "../components/";
const RQSuperheroesPage = () => {
  const [launchComponent, updateLaunchComponent] = useState(false);
  const onSuccess = (response_details) => {
    console.log("Side effect after successful API query", response_details);
  };
  const onError = (error_details) => {
    console.log("Side effect after error occurred", error_details);
  };
  const launchComponentIntoView = () => {
    updateLaunchComponent((prev) => !prev);
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
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData({
      onSuccess,
      onError,
    });
  const config = {
    enabled: false,
    refetchInterval: false,
    refetchOnMount: true,
  };
  const { refetch: refetchForComponent } = useSuperheroDataHook(config);
  if (isLoading || isFetching) {
    return <h4>Loading...</h4>;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }
  console.log({ isLoading, isFetching });
  return (
    <>
      <h4>React query superheroes page</h4>
      <button onClick={refetch}>FETCH SUPERHEROES</button>
      {/* Code for transformed data */}
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
      {/* Code for non transformed data */}
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
      <button
        onClick={() => {
          launchComponentIntoView();
          refetchForComponent();
        }}
      >
        LAUNCH COMPONENT
      </button>
      {launchComponent ? <ViewComponent /> : <></>}
    </>
  );
};
export { RQSuperheroesPage };
