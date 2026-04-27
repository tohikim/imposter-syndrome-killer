import ShareButton from "../result/Sharebutton.jsx";

const Footer = () => {
  return (
    <>
      <div className="footer-container" style={styles.container}>
        <div className="socialtags-container" style={styles.zeroSpace}>
          <ShareButton
            text="Check out my job readiness score"
            url="http://localhost:5173/"
          />
        </div>
        <div className="copyright-container">
          <p style={styles.zeroSpace}>Tohi©2026</p>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    color: "var(--color-primary)",
    fontSize: "0.9rem",
    alignItems: "center",
    textAlign: "center",
    paddingBottom: "1rem",
  },
  zeroSpace: { margin: "0", padding: "0" },
};

export default Footer;
