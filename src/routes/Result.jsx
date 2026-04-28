import Header from "../components/Header";
import HonestDecoder from "../components/HonestDecoder";
import Skills from "../components/Skills.jsx";

function Result(props) {
  return (
    <>
      <Header
        setRoute={props.setRoute}
        setJobDescription={props.setJobDescription}
        enableRestart
        enableShare
      />
      <div style={styles.container}>
        <HonestDecoder llmResult={props.llmResult} />
        <Skills />
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left",
  },
};

export default Result;
