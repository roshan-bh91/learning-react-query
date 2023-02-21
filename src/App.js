import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components";
import { WebappRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Navigation />
      <WebappRoutes />
    </div>
  );
}

export default App;
