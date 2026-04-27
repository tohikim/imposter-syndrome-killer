import { useState } from "react";

const statuses = [
  {
    label: "Click to set",
    background: "transparent",
  },
  {
    label: "I know this",
    background: "#EBF7ED",
  },
  {
    label: "Learning",
    background: "#FEF6D5",
  },
  {
    label: "No clue",
    background: "#FCEBEB",
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
        ...styles.container,
        background: status.background,
        borderRadius:
          props.index === 0
            ? "15px 15px 0 0"
            : props.index === props.lastIndex
              ? "0 0 15px 15px"
              : 0,
      }}
    >
      <div
        style={{
          ...styles.section,
          borderBottom:
            props.index === props.lastIndex
              ? 0
              : "1px solid var(--color-third)",
        }}
      >
        <p style={styles.value}>{props.value}</p>
        <p style={styles.label}>{status.label}</p>
      </div>
    </button>
  );
};

const styles = {
  container: {
    border: 0,
    padding: 0,
    margin: "0 2rem 0 0",
    fontSize: "18px",
    width: "100%",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignitems: "center",
    padding: 0,
    margin: 0,
  },
  value: {
    color: "var(--color-secondary)",
    fontSize: "18px",
    padding: "1rem",
    margin: 0,
    verticalAlign: "center",
  },
  label: {
    padding: "1rem",
    margin: 0,
  },
};

export default Skillcard;
