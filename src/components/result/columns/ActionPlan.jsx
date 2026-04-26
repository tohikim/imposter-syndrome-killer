import ActionCheckBox from "./ActionCheckBox";

const ActionPlan = ({ llmResult }) => {
  return (
    <div>
      <div
        className="learn-list"
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
          Action Plan
        </h4>
        <ul>
          {llmResult.skills.map((skill) => {
            return (
              <div key={skill.label} style={{ marginBottom: 20 }}>
                <h6
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.5 rem",
                    textAlign: "left",
                    padding: 0,
                    margin: 0,
                    fontWeight: "400",
                  }}
                >
                  {skill.label}
                </h6>
                {skill.actionItems.map((item) => {
                  return <ActionCheckBox key={item} item={item} />;
                })}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActionPlan;
