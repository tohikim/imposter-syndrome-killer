import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ResultBody from "../components/ResultBody.jsx";
import ToggleEdit from "../components/ToggleEdit.jsx";
import ColumnOutput from "../components/ColumnOutput.jsx";
import ExportFile from "../components/ExportFile.jsx";

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
        <ColumnOutputl lmResult={props.llmResult} />
        <ExportFile llmResult={props.llmResult} />
      </div>
      <Footer />
    </>
  );
}

export default Result;
