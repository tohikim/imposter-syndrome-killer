const ActionPlan = ({ llmResult }) => {
  return (
    <div>
      <div
        className="learn-list"
        style={{
          width: "80vw",
          color: "#E6D6FF",
          marginTop: "2rem",
          border: "1px solid #CFA6FF",
          backgroundColor: "rgba(0,0,0,0.5)",
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
              <div style={{ marginBottom: 20 }}>
                <h6
                  style={{
                    fontSize: "1rem",
                    paddingBottom: "0.7rem",
                    marginBottom: "0.6rem",
                    textAlign: "left",
                    padding: 0,
                    margin: 0,
                    fontWeight: "400",
                  }}
                >
                  {skill.title}
                </h6>
                {skill.items.map((item) => {
                  return (
                    <p
                      style={{
                        fontSize: "0.9rem",
                        textAlign: "justify",
                        padding: "0",
                        margin: "0",
                        fontWeight: "300",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item}
                    </p>
                  );
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
