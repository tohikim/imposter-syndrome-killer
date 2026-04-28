import { useState } from "react";
import youtube from "../../../assets/youtube.png";
import "./ActionCheckBox.css";

const ActionCheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  // const [statusIndex, setStatusIndex] = useState(
  //   props.skillStatuses[props.skillStatusIndex].statusIndex,
  // );

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    // setStatusIndex(2);
  };

  const link = () => {
    const url =
      "https://www.youtube.com/results?search_query=" + props.actionItem;
    return window.open(url);
  };

  return (
    <div
      style={{
        ...styles.container,
        color: isChecked ? "var(--color-third)" : "var(--color-secondary)",
        borderBottom: props.lastIndex ? 0 : "1px solid var(--color-third)",
      }}
    >
      <input
        className={isChecked ? "checked" : ""}
        type="checkbox"
        value={props.actionItem}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <span
        style={{
          ...styles.span,
          textDecoration: isChecked ? "line-through" : undefined,
        }}
      >
        {props.actionItem}
      </span>
      <button
        onClick={link}
        style={{
          border: 0,
          background: "transparent",
        }}
      >
        <img
          alt="Youtube link"
          src={youtube}
          style={{
            ...styles.img,
            opacity: isChecked ? 0.2 : 0.7,
          }}
        />
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "left",
    margin: 0,
    padding: "1rem",
    gap: "1rem",
  },
  span: {
    fontSize: "18px",
    textAlign: "left",
    padding: "0",
    margin: "0",
    marginLeft: "45px",
    fontWeight: "300",
    marginBottom: "0.5rem",
    marginRight: "0.3rem",
  },
  img: {
    height: "15px",
    width: "15px",
    margin: 0,
    paddingTop: "0.3rem",
    alignItems: "center",
  },
};

export default ActionCheckBox;
