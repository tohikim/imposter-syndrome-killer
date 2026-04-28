import { useState } from "react";

const HonestDecoder = (props) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div style={styles.singleColumnDiv}>
      <h4 style={styles.h4}>{props.llmResult.decoder.roleTitle}</h4>
      <h6 style={styles.h6}>The Real Role</h6>
      {toggle && <p style={styles.p}>{props.llmResult.decoder.roleOverview}</p>}
      <div style={styles.columnTitleDiv}>
        <button onClick={() => setToggle(!toggle)} style={styles.p}>
          {toggle ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

export const styles = {
  singleColumnDiv: {
    marginTop: "2rem",
    border: 0,
    gap: "1rem",
    textAlign: "left",
  },
  columnTitleDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    verticalAlign: "center",
  },
  h4: {
    fontSize: "1.3rem",
    paddingBottom: "0.7rem",
    textAlign: "left",
    padding: 0,
    margin: 0,
    fontWeight: "400",
    marginBottom: "1rem",
  },
  h6: {
    fontSize: "18px",
    paddingBottom: "0.7rem",
    marginBottom: "0.2rem",
    textAlign: "left",
    fontWeight: "400",
  },
  p: {
    fontSize: "18px",
    textAlign: "left",
    padding: "0",
    margin: "0",
    fontWeight: "100",
    marginBottom: "1rem",
    lineHeight: "1.6rem",
  },
  toggleButton: {
    border: 0,
    backgroundColor: "transparent",
    fontSize: "1.3rem",
    paddingBottom: "0.7rem",
    textAlign: "right",
    padding: 0,
    margin: 0,
    fontWeight: "400",
    marginBottom: "1rem",
  },
};

export default HonestDecoder;
