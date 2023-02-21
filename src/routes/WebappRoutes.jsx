import { Routes, Route } from "react-router-dom";
import { Homepage, RQSuperheroesPage, SuperheroesPage } from "../pages";
const WebappRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/superheroes-page" element={<SuperheroesPage />} />
      <Route path="/rq-superheroes-page" element={<RQSuperheroesPage />} />
    </Routes>
  );
};
export { WebappRoutes };
