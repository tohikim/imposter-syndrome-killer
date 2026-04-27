import { useState } from "react";
import Skillcard from "./Skillcard";
import { styles as honestDecoderStyles } from "./HonestDecoder";

const SkillAssessment = ({ llmResult }) => {
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
            {llmResult.skills.map((skill, index) => {
              const lastIndex = llmResult.skills.length - 1;
              return (
                <Skillcard
                  key={skill.label}
                  value={skill.label}
                  index={index}
                  lastIndex={lastIndex}
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
