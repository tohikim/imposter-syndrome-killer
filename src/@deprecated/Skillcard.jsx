const statuses = [
  {
    label: "Click to set",
    background: "transparent",
    progress: undefined,
  },
  {
    label: "I know this",
    background: "#EBF7ED",
    progress: 1,
  },
  {
    label: "Learning",
    background: "#FEF6D5",
    progress: 0.5,
  },
  {
    label: "No clue",
    background: "#FCEBEB",
    progress: 0,
  },
];

const Skillcard = (props) => {
  const status = statuses[props.statusIndex];

  const handleClick = (e) => {
    e.preventDefault();
    props.setSkillStatuses((prev) => {
      return prev.map((skillStatus) => {
        if (skillStatus.label === props.value) {
          let newStatusIndex = skillStatus.statusIndex;

          if (newStatusIndex < 3) {
            newStatusIndex = newStatusIndex + 1;
          } else {
            newStatusIndex = 0;
          }

          return { label: skillStatus.label, statusIndex: newStatusIndex };
        }

        return skillStatus;
      });
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        ...styles.container,
        background: status.background,
        borderRadius: props.firstIndex
          ? "15px 15px 0 0"
          : props.lastIndex
            ? "0 0 15px 15px"
            : 0,
      }}
    >
      <div
        style={{
          ...styles.section,
          borderBottom: props.lastIndex ? 0 : "1px solid var(--color-third)",
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
