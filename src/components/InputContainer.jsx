import { getLlmOutput } from "../api/llm";
import arrow from "../assets/arrow.png";

const InputContainer = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!props.jobDescription) {
      alert("Please enter a job description");
      return;
    }

    const llmOutput = await getLlmOutput(props.jobDescription);

    props.setLlmResult(llmOutput);
    props.setRoute("result");
  };
  return (
    <div style={styles.container}>
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="Paste job description here."
          value={props.jobDescription}
          rows={1}
          style={styles.textarea}
          onChange={(e) => props.setJobDescription(e.target.value)}
        />
        <button type={"submit"} variant="contained" style={styles.button}>
          <img alt="arrow" src={arrow} style={styles.arrow} />
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    boxShadow: "0 0 20px var(--color-third), 0 0 40px var(--color-third)",
    borderRadius: "25px",
    marginBottom: "0.5rem",
    padding: 0,
    alignSelf: "center",
    width: "95vw",
  },
  textarea: {
    margin: 0,
    border: "0",
    borderRadius: "25px",
    color: "var(--color-primary)",
    padding: "1.5rem",
    fontSize: "18px",
    fontWeight: "100",
    width: "85%",
    alignSelf: "flex-start",
  },
  button: {
    borderRadius: "50px",
    border: 0,
    backgroundColor: "var(--color-navy)",
    padding: "0.2rem 0 0 0",
    height: "45px",
    width: "45px",
    margin: "1rem",
    float: "right",
  },
  arrow: {
    width: "16px",
    height: "21x",
    margin: 0,
  },
};

export default InputContainer;
