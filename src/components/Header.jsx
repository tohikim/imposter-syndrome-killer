import reloadicon from "../assets/reload.png";
import shareicon from "../assets/share.png";

const Header = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setRoute("home");
    props.setJobDescription("");
  };
  const handleShare = (e) => {
    e.preventDefault();

    /** @todo handle share */
    console.log("Share clicked");
  };
  return (
    <div style={styles.container}>
      <div style={styles.restartContainer}>
        {props.enableRestart && (
          <button onClick={handleClick} style={styles.button}>
            <img src={reloadicon} style={styles.icon} />
          </button>
        )}
      </div>
      <p style={styles.modelName}>ISK 1.0</p>
      <div style={styles.iconContainer}>
        {props.enableShare && (
          <button onClick={handleShare} style={styles.button}>
            <img src={shareicon} style={styles.icon} />
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "fit-content",
    verticalAlign: "top",
    padding: "1rem",
  },
  restartContainer: {
    alignItems: "left",
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: "0",
    alignItems: "right",
  },
  modelName: {
    color: "var(--color-secondary)",
    fontSize: "1rem",
    textAlign: "center",
    paddingTop: "0.5rem",
  },
  iconContainer: { alignItems: "right" },
  icon: { height: 70, width: 70, margin: 0, padding: 0 },
};

export default Header;
