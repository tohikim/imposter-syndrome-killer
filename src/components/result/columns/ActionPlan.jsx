import { useState } from "react";
import ActionCheckBox from "./ActionCheckBox";

const ActionPlan = ({ llmResult }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div
        className="learn-list"
        style={{
          width: "80vw",
          marginTop: "2rem",
          border: 0,
          paddingBottom: "1rem",
          gap: "1rem",
          padding: "1.5rem",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            verticalAlign: "center",
            borderBottom: "1.5px solid var(--color-third)",
          }}
        >
          <h4
            style={{
              fontSize: "1.3rem",
              paddingBottom: "0.7rem",
              textAlign: "left",
              padding: 0,
              margin: 0,
              fontWeight: "400",
              marginBottom: "1rem",
            }}
          >
            Action Plan
          </h4>
          <button
            onClick={() => setToggle(!toggle)}
            style={{
              border: 0,
              backgroundColor: "transparent",
              fontSize: "1.3rem",
              paddingBottom: "0.7rem",
              textAlign: "right",
              padding: 0,
              margin: 0,
              fontWeight: "400",
              marginBottom: "1rem",
            }}
          >
            +
          </button>
        </div>
        {toggle && (
          <div>
            <ul
              style={{
                margin: "1rem 0 0 0",
                padding: 0,
              }}
            >
              {llmResult.skills.map((skill) => {
                return (
                  <div key={skill.label} style={{ marginBottom: 20 }}>
                    <h6
                      style={{
                        fontSize: "18px",
                        padding: 0,
                        margin: 0,
                        paddingTop: "0.7rem",
                        marginBottom: "0.2rem",
                        textAlign: "left",
                        fontWeight: "400",
                      }}
                    >
                      {skill.label}
                    </h6>
                    <div
                      style={{
                        border: "1px solid var(--color-third",
                        borderRadius: "15px",
                        marginTop:'0.6rem',
                        color:'var(--color-secondary',
                        textAlign:'left'
                      }}
                    >
                      {skill.actionItems.map((item, index) => {
                        const lastIndex = skill.actionItems.length - 1;
                        return (
                          <ActionCheckBox
                            key={item}
                            item={item}
                            index={index}
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

export default ActionPlan;
