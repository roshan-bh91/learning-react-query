import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (page_number_given) => {
  return axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${page_number_given}`
  );
};

const RQPaginatedQueries = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const {
    isLoading,
    isError,
    error,
    data: colorData,
  } = useQuery(
    ["colors", pageNumber],
    () => {
      return fetchColors(pageNumber);
    },
    {
      keepPreviousData: true,
    }
  );
  console.log(colorData);
  const totalColorCount = Number(colorData.headers["x-total-count"]);
  const perPageColorLimit = 2;
  const colorPages = totalColorCount / perPageColorLimit;
  const proceedToNextPage = () => {
    updatePageNumber((page) => page + 1);
  };
  const proceedToPreviousPage = () => {
    updatePageNumber((page) => page - 1);
  };
  if (isLoading) {
    return <p>Loading the colors...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h4>Paginated Queries through RQ</h4>
      {colorData?.data.map((everyColor) => {
        return <h4 key={everyColor.id}>{everyColor.color_info}</h4>;
      })}
      <button onClick={proceedToPreviousPage} disabled={pageNumber === 1}>
        Prev Page
      </button>
      {[...Array(colorPages).keys()]
        .map((index) => ++index)
        .map((everyPage) => {
          return (
            <button
              onClick={() => {
                console.log(everyPage);
                updatePageNumber(everyPage);
              }}
            >
              {everyPage}
            </button>
          );
        })}
      <button onClick={proceedToNextPage} disabled={pageNumber === 4}>
        Next Page
      </button>
    </div>
  );
};

export { RQPaginatedQueries };
