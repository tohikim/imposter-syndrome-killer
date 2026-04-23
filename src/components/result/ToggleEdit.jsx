import { useState } from "react";

const ToggleEdit = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!props.jobDescription) {
      alert("Please enter a job description");
      return;
    }

    /** @todo submit job description to LLM */
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <button
          onClick={handleClick}
          style={{
            borderRadius: "10px",
            backgroundColor: "#8B5CFF",
            boxShadow: "0 0 20px #a970ffa5, 0 0 40px #8a5cff8e",
            fontSize: "0.9rem",
            padding: "0.5rem",
            width: "80vw",
            marginBottom: "1rem",
            color: "white",
            borderColor: "#8B5CFF",
          }}
        >
          View/Edit original job description
        </button>

        {toggle ? (
          // style={{
          //                 visibility: toggle ? props.displayValue : "hidden",
          //             }}
          <form onSubmit={onSubmit}>
            <textarea
              placeholder="Paste job description here."
              value={props.jobDescription}
              rows={10}
              style={{
                marginTop: "0.2rem",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "15px",
                color: "white",
                padding: "0.3rem",
                paddingBottom:0,
                marginBottom:0,
                fontWeight: "100",
                width: "80vw",
              }}
              onChange={(e) => props.setJobDescription(e.target.value)}
            />
            <button
              type={"submit"}
              style={{
                borderRadius: "10px",
                backgroundColor: "#8B5CFF",
                boxShadow: "0 0 20px #a970ffa5, 0 0 40px #8a5cff8e",
                fontSize: "0.9rem",
                padding: "0.5rem",
                width: "80vw",
                marginTop: 0,
                marginBottom: "2rem",
                color: "white",
                borderColor: "#8B5CFF",
              }}
            >
              Submit
            </button>
          </form>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default ToggleEdit;
