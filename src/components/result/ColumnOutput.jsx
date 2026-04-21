import Skillcard from "./columns/Skillcard";

/** @todo replace columns with components in the columns folder */
const ColumnOutput = (props) => {
  return (
    <>
      <div>
        <div
          className="role-decode"
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
              marginBottom: "0",
              textAlign: "left",
              padding: 0,
              margin: 0,
              fontWeight: "400",
            }}
          >
            Honest Decoder
          </h4>
          <h6
            style={{
              fontSize: "1rem",
              paddingBottom: "0.7rem",
              marginBottom: "0",
              textAlign: "left",
              padding: 0,
              margin: 0,
              fontWeight: "400",
            }}
          >
            The Real Role
          </h6>
          <p
            style={{
              fontSize: "0.9rem",
              textAlign: "justify",
              padding: "0",
              margin: "0",
              fontWeight: "100",
            }}
          >
            {props.llmResult.honestDecoder.theRealRole}
          </p>
          <h6
            style={{
              fontSize: "1rem",
              paddingBottom: "0.7rem",
              marginBottom: "0",
              textAlign: "left",
              padding: 0,
              margin: 0,
              fontWeight: "400",
            }}
          >
            Brutally Honest Take
          </h6>
          <p
            style={{
              fontSize: "0.9rem",
              textAlign: "justify",
              padding: "0",
              margin: "0",
              fontWeight: "100",
            }}
          >
            {props.llmResult.honestDecoder.brutallyHonestTake.overview}
          </p>
          <h6
            style={{
              fontSize: "1rem",
              paddingBottom: "0.7rem",
              marginBottom: "0",
              textAlign: "left",
              padding: 0,
              margin: 0,
              fontWeight: "400",
            }}
          >
            What does this mean?
          </h6>
          <p
            style={{
              fontSize: "0.9rem",
              textAlign: "justify",
              padding: "0",
              margin: "0",
              fontWeight: "100",
            }}
          >
            {props.llmResult.honestDecoder.brutallyHonestTake.meaning}
          </p>
        </div>
        <div
          className="skill-check"
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
              fontSize: "1rem",
              paddingBottom: "0.7rem",
              marginBottom: "0",
              textAlign: "left",
              padding: 0,
              margin: 0,
              fontWeight: "400",
            }}
          >
            Skill Assessment
          </h4>
          <ul>
            {props.llmResult.skills.map((skill) => {
              return <Skillcard value={skill.title} />;
            })}
          </ul>
        </div>
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
              fontSize: "1rem",
              paddingBottom: "0.7rem",
              marginBottom: "0",
              textAlign: "left",
              padding: 0,
              margin: 0,
              fontWeight: "400",
            }}
          >
            Action Plan
          </h4>
          <ul>
            {props.llmResult.skills.map((skill) => {
              return (
                <div style={{ marginBottom: 20 }}>
                  <h6>{skill.title}</h6>
                  {skill.items.map((item) => {
                    return <p>{item}</p>;
                  })}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ColumnOutput;
