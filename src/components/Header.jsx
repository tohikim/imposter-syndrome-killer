import logo from "../assets/logo.png";
import shareicon from "../assets/share.png";

const Header = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setRoute("home");
    props.setJobDescription("");
  };
  const sthelse = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <button onClick={handleClick} style={styles.button}>
            <img src={logo} style={styles.logo} />
          </button>
        </div>
        <div>
          <p style={styles.modelName}>ISK 1.0</p>
        </div>
        <div style={styles.iconContainer}>
          <button onClick={sthelse} style={styles.button}>
            <img src={shareicon} style={styles.icon} />
          </button>
        </div>
      </div>
    </>
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
  logoContainer: { alignItems: "left", margin: "0", padding: "0" },
  button: {
    backgroundColor: "transparent",
    borderWidth: "0",
    alignItems: "right",
  },
  logo: {
    height: 33,
    width: 33,
    padding: "1rem",
    margin: 0,
  },
  modelName: {
    color: "var(--color-secondary)",
    fontSize: "1rem",
    padding: "0.5rem 0 0 1rem",
  },
  iconContainer: { alignItems: "right", margin: "0", padding: "0" },
  icon: { height: 70, width: 70, margin: 0, padding: 0 },
};

export default Header;
