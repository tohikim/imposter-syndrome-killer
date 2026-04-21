import "./App.css";
// import background from '../src/assets/background.png';
import { useState } from "react";
import Home from "./routes/Home";
import Result from "./routes/Result";

const routes = {
  home: Home,
  result: Result,
};

function App() {
  const [route, setRoute] = useState("home");
  const Route = routes[route];
  const [jobDescription, setJobDescription] = useState("");

  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Route
        setRoute={setRoute}
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
      />
    </div>
  );
}

export default App;
