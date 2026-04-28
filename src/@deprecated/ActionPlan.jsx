import { useState } from "react";
import ActionCheckBox from "./ActionCheckBox";
import { styles as honestDecoderStyles } from "";

const ActionPlan = (props) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div style={honestDecoderStyles.singleColumnDiv}>
        <div style={honestDecoderStyles.columnTitleDiv}>
          <h4 style={honestDecoderStyles.h4}>Action Plan</h4>
          <button
            onClick={() => setToggle(!toggle)}
            style={honestDecoderStyles.toggleButton}
          >
            +
          </button>
        </div>
        {toggle && (
          <div>
            <ul style={styles.spacing}>
              {props.llmResult.skills.map((skill, index) => {
                const skillStatusIndex = index;
                return (
                  <div key={skill.label} style={styles.divContainer}>
                    <h6 style={styles.h6}>{skill.label}</h6>
                    <div style={styles.skillDiv}>
                      {skill.actionItems.map((item, index) => {
                        const lastIndex =
                          index === skill.actionItems.length - 1;
                        return (
                          <ActionCheckBox
                            key={item}
                            actionItem={item}
                            actionItemIndex={index}
                            skillStatusIndex={skillStatusIndex}
                            skillStatuses={props.skillStatuses}
                            setSkillStatuses={props.setSkillStatuses}
                            lastIndex={lastIndex}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  h6: {
    ...honestDecoderStyles.h6,
    padding: 0,
    margin: 0,
  },
  skillDiv: {
    border: "1px solid var(--color-third",
    borderRadius: "15px",
    marginTop: "0.6rem",
    textAlign: "left",
  },
  spacing: {
    margin: "1rem 0 0 0",
    padding: 0,
  },
  divContainer: { marginBottom: 20 },
};

export default ActionPlan;
