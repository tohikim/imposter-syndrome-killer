import "./App.css";
// import background from './assets/background2.jpg';
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
    <div
      className="App"
      style={{
        display:'flex',
        flexDirection:'column',
        height: 'calc(100vh - 60px)',
      }}>
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

export default App;
