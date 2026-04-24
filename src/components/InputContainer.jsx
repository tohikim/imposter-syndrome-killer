import { getLlmOutput } from "../api/llm";

const InputContainer = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();


    if (!props.jobDescription) {
      alert("Please enter a job description");
      return;
    }

    const llmOutput = await getLlmOutput(props.jobDescription);

    const parsedOutput = JSON.parse(llmOutput);

    console.log(parsedOutput);

    props.setLlmResult(parsedOutput);

    props.setRoute("result");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="Paste job description here."
          value={props.jobDescription}
          rows={10}
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "15px",
            color: "white",
            padding: "0.6rem",
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
            marginBottom: "2rem",
            color: "white",
            borderColor: "#8B5CFF",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
