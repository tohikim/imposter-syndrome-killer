import { useState } from "react";

const statuses = [
  {
    label: "Click to set",
    color: "transparent",
    borderColor: "white",
    textColor: "white",
  },
  {
    label: "I know this",
    color: "green",
    borderColor: "white",
    textColor: "white",
  },
  {
    label: "Learning",
    color: "yellow",
    borderColor: "white",
    textColor: "black",
  },
  {
    label: "No clue",
    color: "red",
    borderColor: "white",
    textColor: "white",
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
        border: `1px solid ${status.borderColor}`,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        background: status.color,
        color: status.textColor,
        marginRight: 10,
      }}
    >
      <p>{props.value}</p>
      <p>{status.label}</p>
    </button>
  );
};

export default Skillcard;
