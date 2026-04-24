import Skillcard from "./Skillcard";

const SkillAssessment = ({ llmResult }) => {
  return (
    <div
      className="skill-check"
      style={{
        width: "80vw",
        color: "var(--color-secondary)",
        marginTop: "2rem",
        border: "1px solid var(--color-primary)",
        backgroundColor: "var(--color-bg-black)",
        borderRadius: "15px",
        paddingBottom: "1rem",
        gap: "1rem",
        padding: "1.5rem",
      }}
    >
      <h4
        style={{
          fontSize: "1.2rem",
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
      <ul>
        {llmResult.skills.map((skill) => {
          return <Skillcard key={skill.title} value={skill.title} />;
        })}
      </ul>
    </div>
  );
};

export default SkillAssessment;
