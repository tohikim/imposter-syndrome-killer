import HeaderResult from "../components/HeaderResult";
import ColumnOutput from "../components/result/ColumnOutput.jsx";

function Result(props) {
  return (
    <>
      <HeaderResult setRoute={props.setRoute} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* <ToggleEdit
          jobDescription={props.jobDescription}
          setJobDescription={props.setJobDescription}
          setLlmResult={props.setLlmResult}
        /> */}
        <ColumnOutput llmResult={props.llmResult} />
        {/* <ExportFile /> */}
      </div>
    </>
  );
}

export default Result;
