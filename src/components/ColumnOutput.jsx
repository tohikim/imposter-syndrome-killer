import Skillcard from "./Skillcard";

const ColumnOutput = () => {
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
          <h5
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
            Honest Decoder
          </h5>
          <p
            style={{
              fontSize: "0.9rem",
              textAlign: "justify",
              padding: "0",
              margin: "0",
              fontWeight: "100",
            }}
          >
            They want a lead-level candidate. In plain English: runway is
            building a first-of-its-kind tool for teams to track, automate, and
            collaborate on their mobile app releases. we're already used by
            industry-leading mobile teams to ship some of your favori. Expect a
            mix of coding, meetings, and shifting
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
          <h5
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
          </h5>
          <ul>
            <Skillcard value="React" />
            <Skillcard value="Typescript" />
            <Skillcard value="Go" />
          </ul>
        </div>
        <div className="learn-list"></div>
      </div>
    </>
  );
};

export default ColumnOutput;
