import { useState } from "react";

const statuses = [
  {
    label: "Click to set",
    background:'transparent',
  },
  {
    label: "I know this",
    background:'#EBF7ED',
  },
  {
    label: "Learning",
    background:'#FEF6D5'
  },
  {
    label: "No clue",
    background:'#FCEBEB',
  },
];

const Skillcard = (props) => {
  const [statusIndex, setStatusIndex] = useState(0);

  const status = statuses[statusIndex];

  const handleClick = (e) => {
    e.preventDefault();
    setStatusIndex((prev) => {
      if (statusIndex < 3) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        border: 0,
        borderRadius: ((props.index===0) ? '15px 15px 0 0': (props.index === props.lastIndex) ? '0 0 15px 15px':0),
        padding: 0,
        margin: "0 2rem 0 0",
        background: status.background,
        fontSize: "18px",
        width:'100%'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: (props.index === props.lastIndex) ? 0 : "1px solid var(--color-third)",
          width: "100%",
          alignitems: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <p
          style={{
            color: "var(--color-secondary)",
            fontSize: "18px",
            padding: "1rem",
            margin: 0,
            verticalAlign: "center",
          }}
        >
          {props.value}
        </p>
        <p style={{
          padding:'1rem',
          margin:0
        }}>{status.label}</p>
      </div>
    </button>
  );
};

export default Skillcard;
