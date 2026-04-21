import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ResultBody from "../components/ResultBody.jsx";

function Result(props) {
  return (
    <>
      <Header setRoute={props.setRoute} />
      <ResultBody
        jobDescription={props.jobDescription}
        setJobDescription={props.setJobDescription}
      />
      <Footer />
    </>
  );
}

export default Result;
