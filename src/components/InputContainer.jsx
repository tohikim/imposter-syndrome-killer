import { getLlmOutput } from "../api/llm";
import arrow from '../assets/arrow.png';

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
    <div
      style={{
        boxShadow: "0 0 20px var(--color-third), 0 0 40px var(--color-third)",
        borderRadius: "25px",
        marginBottom:'0.5rem',
        padding:0,
        alignSelf:'center',
        width:'95vw'
      }}
    >
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="Paste job description here."
          value={props.jobDescription}
          rows={1}
          style={{
            margin: 0,
            border: "0",
            borderRadius: "25px",
            color: "var(--color-primary)",
            padding: "1.5rem",
            fontSize:'18px',
            fontWeight: "100",
            width:'85%',
            alignSelf: "flex-start",
          }}
          onChange={(e) => props.setJobDescription(e.target.value)}
        />
        <button
          type={"submit"}
          variant="contained"
          style={{
            borderRadius: "50px",
            backgroundColor: "var(--color-accent)",
            padding: "0.2rem 0 0 0",
            height: "45px",
            width: "45px",
            margin: "1rem",
            float: "right",
          }}
        >
        <img alt="arrow" src={arrow} style={{
          width:'18px',
          height:'23x',
          margin:0,
        }}/>
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
