import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ToggleEdit from "../components/result/ToggleEdit.jsx";
import ColumnOutput from "../components/result/ColumnOutput.jsx";
import ExportFile from "../components/result/ExportFile.jsx";

function Result(props) {
  return (
    <>
      <Header setRoute={props.setRoute} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ToggleEdit
          jobDescription={props.jobDescription}
          setJobDescription={props.setJobDescription}
          setLlmResult={props.setLlmResult}
        />
        <ColumnOutput llmResult={props.llmResult} />
        <ExportFile />
      </div>
    </>
  );
}

export default Result;
