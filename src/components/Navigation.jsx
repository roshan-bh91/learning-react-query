import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/superheroes-page">Traditional Super Heroes</Link>
        </li>
        <li>
          <Link to="/rq-superheroes-page">React Query Superheroes</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
