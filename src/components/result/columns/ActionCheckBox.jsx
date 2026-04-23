import { useState } from "react";

const ActionCheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      style={{
        textAlign: "left",
        gap:'',
        textDecoration: isChecked ? "line-through" : undefined,
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
          marginRight:'0.3rem',
        }}
      />
      {props.item}
    </div>
  );
};

export default ActionCheckBox;
