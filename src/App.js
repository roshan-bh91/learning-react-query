import "./App.css";
import { Navigation } from "./components";
import { WebappRoutes } from "./routes";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <div className="App">
      <Navigation />
      <WebappRoutes />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </div>
  );
}

export default App;
