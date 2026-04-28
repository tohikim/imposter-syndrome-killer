import "./App.css";
import { useState } from "react";
import Home from "./routes/Home";
import Result from "./routes/Result";

const routes = {
  home: Home,
  result: Result,
};

function App() {
  const [route, setRoute] = useState("home");
  const [jobDescription, setJobDescription] = useState("");
  const [llmResult, setLlmResult] = useState();

  const Route = routes[route];

  return (
    <div style={styles.container}>
      <Route
        setRoute={setRoute}
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
        llmResult={llmResult}
        setLlmResult={setLlmResult}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    width: "100vw",
  },
};

export default App;
