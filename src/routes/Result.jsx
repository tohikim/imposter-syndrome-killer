import { useState } from "react";
import Header from "../components/Header";
import HonestDecoder from "../components/HonestDecoder";
import Score from "../components/Score";
import Skill from "../components/Skill.jsx";
import { mapStateToCurrentScore } from "../utils/map-state-to-current-score";
import { formatArrayToTargetObject } from "../utils/format-array-to-target-object";

function Result(props) {
  const [currentScoreTracker, setCurrentScoreTracker] = useState(
    formatArrayToTargetObject(props.llmResult.skills, 0, "label"),
  );

  const totalScore = props.llmResult.skills.reduce((acc, cur) => {
    acc = acc + cur.actionItems.length;
    return acc;
  }, 0);

  return (
    <div>
      <Header
        setRoute={props.setRoute}
        setJobDescription={props.setJobDescription}
        enableRestart
        enableShare
      />
      <div style={styles.container}>
        <HonestDecoder llmResult={props.llmResult} />
        <Score
          currentScore={mapStateToCurrentScore(currentScoreTracker)}
          totalScore={totalScore}
        />
        <p style={styles.p}>
          Improve your job readiness score by assessing your technical skills
          below.
        </p>
        {props.llmResult.skills.map((skill, index) => {
          return (
            <Skill
              skill={skill}
              updateSkillScore={(score) => {
                setCurrentScoreTracker((prev) => {
                  return { ...prev, [skill.label]: score };
                });
              }}
              key={index}
            />
          );
        })}
      </div>
    </div>
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
    marginBottom: "5rem",
    lineHeight: "1.6rem",
  },
};

export default Result;
