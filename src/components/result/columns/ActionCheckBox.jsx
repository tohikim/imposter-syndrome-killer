import { useState } from "react";
import youtube from "../../../assets/youtube.png";

const ActionCheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "left",
        margin: 0,
        padding: "1rem",
        textDecoration: isChecked ? "line-through" : undefined,
        gap: "1rem",
        borderBottom:
          props.index === props.lastIndex ? 0 : "1px solid var(--color-third)",
      }}
    >
      <input
        type="checkbox"
        value={props.item}
        checked={isChecked}
        onChange={handleOnChange}
        style={{
          fontSize: "0.9rem",
          textAlign: "left",
          padding: "0",
          margin: "0",
          fontWeight: "300",
          marginBottom: "0.5rem",
          marginRight: "0.3rem",
        }}
      />
      {props.item}
      <img
        alt="Youtube link"
        src={youtube}
        style={{ height: "16px", width: "16px" }}
      />
    </div>
  );
};

export default ActionCheckBox;
