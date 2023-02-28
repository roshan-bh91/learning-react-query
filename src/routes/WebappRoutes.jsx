import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  RQParallelQueries,
  RQSingleSuperhero,
  RQSuperheroesPage,
  RQTaskPage,
  SuperheroesPage,
  RQDynamicParallelPage,
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
      <Route path="/rq-dynamic-parallel" element={<RQDynamicParallelPage heroIds={[11,12]}/>} />
    </Routes>
  );
};
export { WebappRoutes };
