import {useState} from 'react';

const HonestDecoder = ({ llmResult }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div
        className="role-decode"
        style={{
          width: "80vw",
          color: "var(--color-secondary)",
          marginTop: "2rem",
          border: "1px solid var(--color-primary)",
          backgroundColor: "var(--color-bg-black",
          borderRadius: "15px",
          paddingBottom: "1rem",
          gap: "1rem",
          padding: "1.5rem",
          textAlign:'left',
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
          Honest Decoder
        </h4>
        <h6
          style={{
            fontSize: "1rem",
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
            fontSize: "0.9rem",
            textAlign: "justify",
            padding: "0",
            margin: "0",
            fontWeight: "300",
            marginBottom: "1rem",
          }}
        >
          {llmResult.honestDecoder.theRealRole}
        </p>
        <h6
          style={{
            fontSize: "1rem",
            paddingBottom: "0.7rem",
            marginBottom: "0.2rem",
            textAlign: "left",
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
            fontWeight: "300",
            marginBottom: "1rem",
          }}
        >
          {llmResult.honestDecoder.brutallyHonestTake.overview}
        </p>
        <button
          onClick={() => setToggle(!toggle)}
          style={{
            fontSize: "1rem",
            textAlign: "left",
            padding: '0.5rem',
            margin: 0,
            fontWeight: "400",
            backgroundColor:'transparent',
            border:'1pt solid var(--color-secondary)',
            borderRadius:'15px',
            color:'var(--color-secondary)',
          }}
        >
          What does this mean?
        </button>
        {toggle && (
          <p
            style={{
              marginTop:'0.5rem',
              fontSize: "0.9rem",
              textAlign: "justify",
              fontWeight: "300",
              paddingLeft:'6%'
            }}
          >
            {llmResult.honestDecoder.brutallyHonestTake.meaning}
          </p>
        )}
      </div>
    </div>
  );
};

export default HonestDecoder;
