import { useState } from "react";
import youtube from "../../../assets/youtube.png";

const ActionCheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked((prev) => !prev);
  };

  const link = () => {
    const url = "https://www.youtube.com/results?search_query=" + props.item;
    return window.open(url);
  };

  console.log(link);

  return (
    <div
      style={{
        color: isChecked ? "var(--color-third)" : "var(--color-secondary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        textAlign: "left",
        margin: 0,
        padding: "1rem",
        gap: "1rem",
        borderBottom:
          props.index === props.lastIndex ? 0 : "1px solid var(--color-third)",
      }}
    >
      <input
        className={isChecked ? "checked" : ""}
        type="checkbox"
        value={props.item}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <span
        style={{
          fontSize: "0.9rem",
          textAlign: "left",
          padding: "0",
          margin: "0",
          marginLeft: "45px",
          fontWeight: "300",
          marginBottom: "0.5rem",
          marginRight: "0.3rem",
          textDecoration: isChecked ? "line-through" : undefined,
        }}
      >
        {props.item}
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
          style={{ height: "15px", width: "15px", margin:0,paddingTop:'0.3rem',alignItems: "center", opacity: isChecked ? 0.2 : 0.7}}
        />
      </button>
    </div>
  );
};

export default ActionCheckBox;
