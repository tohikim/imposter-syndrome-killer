import { useState } from "react";
import Skillcard from "./Skillcard";
import { styles as honestDecoderStyles } from "../components/HonestDecoder";

const SkillAssessment = (props) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="skill-check" style={honestDecoderStyles.singleColumnDiv}>
      <div style={honestDecoderStyles.columnTitleDiv}>
        <h4 style={honestDecoderStyles.h4}>Skill Assessment</h4>
        <button
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
          style={honestDecoderStyles.toggleButton}
        >
          +
        </button>
      </div>
      {toggle && (
        <div>
          <ul style={styles.actionDiv}>
            {props.llmResult.skills.map((skill, index) => {
              const firstIndex = index === 0;
              const lastIndex = index === props.llmResult.skills.length - 1;
              return (
                <Skillcard
                  key={skill.label}
                  value={skill.label}
                  statusIndex={props.skillStatuses[index].statusIndex}
                  setSkillStatuses={props.setSkillStatuses}
                  firstIndex={firstIndex}
                  lastIndex={lastIndex}
                  // skillStatuses={props.skillStatuses}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  ...honestDecoderStyles,
  actionDiv: {
    margin: 0,
    marginTop: "1rem",
    padding: 0,
    border: "1px solid var(--color-third)",
    borderRadius: "15px",
    gap: 0,
    lineheight: "fit-content",
  },
};

export default SkillAssessment;
