import { useSuperheroDataHook } from "../hooks/useSuperheroDataHook";

const ViewComponent = () => {
  const config = {
    enabled: false,
    refetchInterval: false,
    refetchOnMount: true,
  };
  const { isLoading, isFetching,isError,error, refetch, data } = useSuperheroDataHook(config);
    if (isLoading || isFetching) {
      return <h4>Loading...</h4>;
    }
    if (isError) {
      return <h4>{error.message}</h4>;
    }
  return (
    <>
      <h4>Mounted component</h4>
      {
        <>
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
      }
      <button onClick={refetch}>Reload data</button>
    </>
  );
};
export { ViewComponent };
