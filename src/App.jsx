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
  let [loading, setLoading] = useState(false);

  const Route = routes[route];

  return (
    <div style={styles.container}>
      <Route
        setRoute={setRoute}
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
        llmResult={llmResult}
        setLlmResult={setLlmResult}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "var(--font-family)",
  },
};

export default App;
