import { Routes, Route } from "react-router-dom";
import {
  Homepage,
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
    </Routes>
  );
};
export { WebappRoutes };
