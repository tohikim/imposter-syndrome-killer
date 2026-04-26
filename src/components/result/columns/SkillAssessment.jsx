import { useState } from "react";
import Skillcard from "./Skillcard";

const SkillAssessment = ({ llmResult }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="skill-check"
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
          Skill Assessment
        </h4>
        <button
          onClick={(e) => { e.preventDefault(); setToggle(!toggle)}}
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
              margin:0,
              marginTop:'1rem',
              padding:0,
              border: "1px solid var(--color-third)",
              borderRadius: "15px",
              gap:0,
              lineheight:'fit-content'
            }}
          >
            {llmResult.skills.map((skill, index) => {
              const lastIndex = llmResult.skills.length - 1;
              return <Skillcard key={skill.label} value={skill.label} index={index} lastIndex={lastIndex}/>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillAssessment;
