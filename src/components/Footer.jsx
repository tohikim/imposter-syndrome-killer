import ShareButton from "./Sharebutton.jsx";

const Footer = () => {
  return (
    <>
      <div
        className="footer-container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "fit-content",
          color: "#CFA6FF",
          fontSize: "0.9rem",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: "1rem",
        }}
      >
        <div
          className="socialtags-container"
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          <ShareButton
            text="Check out my job readiness score"
            url="http://localhost:5173/"
          />
        </div>
        <div className="copyright-container" style={{}}>
          <p
            style={{
              margin: "0",
            }}
          >
            Tohi©2026
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
