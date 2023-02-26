import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/superheroes-page">Traditional Super Heroes</Link>
        </li>
        <li>
          <Link to="/rq-superheroes-page">React Query Superheroes</Link>
        </li>
        <li>
          <Link to="/rq-task">React Query Task</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
