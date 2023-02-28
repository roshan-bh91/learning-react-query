import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  RQSingleSuperhero,
  RQSuperheroesPage,
  RQTaskPage,
  SuperheroesPage,
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
    </Routes>
  );
};
export { WebappRoutes };
