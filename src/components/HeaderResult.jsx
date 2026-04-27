import reloadicon from "../assets/reload.png";
import shareicon from "../assets/share.png";
import { styles } from "./Header";

const HeaderResult = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setRoute("home");
    props.setJobDescription("");
  };
  const handleShare = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <button onClick={handleClick} style={styles.button}>
            <img src={reloadicon} style={styles.icon} />
          </button>
        </div>
        <div>
          <p style={styles.modelName}>ISK 1.0</p>
        </div>
        <div style={styles.iconContainer}>
          <button onClick={handleShare} style={styles.button}>
            <img src={shareicon} style={styles.icon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderResult;
