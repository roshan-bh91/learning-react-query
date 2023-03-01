import { useInfiniteQuery } from "react-query";
import axios from "axios";
const fetchColorsList = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};
const RQInfiniteQueriesPage = () => {
  const {
    isLoading,
    isError,
    error,
    data: color_infinite_rq_data,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["colors"], fetchColorsList, {
    getNextPageParam: (_lastPageParam, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) {
    return <h4>Loading the color list...</h4>;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }
  return (
    <div>
      <h4>Infinite Queries through React Query</h4>
      {color_infinite_rq_data?.pages.map((everyGroup, index) => {
        return (
          <>
            {everyGroup.data.map((everyItem, index) => {
              return (
                <p>
                  {everyItem.id}. {everyItem.color_info}
                </p>
              );
            })}
          </>
        );
      })}
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        LOAD MORE
      </button>
    </div>
  );
};
export { RQInfiniteQueriesPage };
