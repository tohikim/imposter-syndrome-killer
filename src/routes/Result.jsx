import HeaderResult from "../components/HeaderResult";
import ColumnOutput from "../components/result/ColumnOutput.jsx";

function Result(props) {
  return (
    <>
      <HeaderResult
        setRoute={props.setRoute}
        setJobDescription={props.setJobDescription}
      />
      <div style={styles.container}>
        <ColumnOutput llmResult={props.llmResult} />
        {/* <ExportFile /> */}
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
};

export default Result;
