import { useState } from "react";

const HonestDecoder = ({ llmResult }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="role-decode"
      style={{
        width: "80vw",
        marginTop: "2rem",
        border: 0,
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
          Honest Decoder
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
          <h6
            style={{
              fontSize: "18px",
              paddingBottom: "0.7rem",
              marginBottom: "0.2rem",
              textAlign: "left",
              fontWeight: "400",
            }}
          >
            The Real Role
          </h6>
          <p
            style={{
              fontSize: "18px",
              textAlign: "left",
              padding: "0",
              margin: "0",
              fontWeight: "100",
              marginBottom: "1rem",
              lineHeight: "1.6rem",
            }}
          >
            {llmResult.decoder.roleOverview}
          </p>
          <h6
            style={{
              fontSize: "18px",
              paddingBottom: "0.7rem",
              marginBottom: "0.2rem",
              textAlign: "left",
              fontWeight: "400",
            }}
          >
            Honest Take
          </h6>
          <p
            style={{
              fontSize: "18px",
              textAlign: "left",
              padding: "0",
              margin: "0",
              fontWeight: "100",
              marginBottom: "1rem",
              lineHeight: "1.6rem",
            }}
          >
            {llmResult.decoder.honestTake}
          </p>
        </div>
      )}
    </div>
  );
};

export default HonestDecoder;
