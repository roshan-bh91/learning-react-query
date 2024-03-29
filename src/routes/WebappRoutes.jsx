import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  RQParallelQueries,
  RQSingleSuperhero,
  RQSuperheroesPage,
  RQTaskPage,
  SuperheroesPage,
  RQDynamicParallelPage,
  RQDependentQueries,
  RQPaginatedQueries,
  RQInfiniteQueriesPage,
  RQPostNewHeroPage,
  RQParticularSuperheroPage,
} from "../pages";
const WebappRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/superheroes-page" element={<SuperheroesPage />} />
      <Route path="/rq-superheroes-page" element={<RQSuperheroesPage />} />
      <Route path="/rq-task" element={<RQTaskPage />} />
      <Route
        path={`/rq-superheroes-page/:id`}
        element={<RQSingleSuperhero />}
      />
      <Route path="/rq-parallel-queries" element={<RQParallelQueries />} />
      <Route
        path="/rq-dynamic-parallel"
        element={<RQDynamicParallelPage heroIds={[11, 12]} />}
      />
      <Route
        path="/rq-dependent-queries"
        element={<RQDependentQueries email={"vishwas@codevolution.com"} />}
      />
      <Route path="/rq-paginated-queries" element={<RQPaginatedQueries />} />
      <Route path="/rq-infinite-queries" element={<RQInfiniteQueriesPage />} />
      <Route path="/rq-add-superhero" element={<RQPostNewHeroPage />} />
      <Route
        path="/rq-add-superhero/:superhero_id"
        element={<RQParticularSuperheroPage />}
      />
    </Routes>
  );
};
export { WebappRoutes };
