import Header from "../components/Header";
import HonestDecoder from "../components/HonestDecoder";
import Score from "../components/Score";
import Skill from "../components/Skill.jsx";

function Result(props) {
  console.log(props.llmResult.skills);
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
        <Score />
        <p style={styles.p}>
          Improve your job readiness score by assessing your technical skills
          below.
        </p>
        {props.llmResult.skills.map((skill, index) => {
          return <Skill skill={skill} key={index} />;
        })}
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  },
  p: {
    fontSize: "18px",
    textAlign: "left",
    padding: "0",
    margin: "0",
    fontWeight: "100",
    marginBottom: "1rem",
    lineHeight: "1.6rem",
  },
};

export default Result;
