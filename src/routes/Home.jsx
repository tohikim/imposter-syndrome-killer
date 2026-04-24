import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TitleContainer from "../components/TitleContainer.jsx";
import InputContainer from "../components/InputContainer.jsx";
import InfoContainer from "../components/InfoContainer.jsx";

function Home(props) {
  return (
    <>
      <Header setRoute={props.setRoute} />
      <div
        className="body"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          // verticalAlign: "space-between",
          justifyContent: "space-between",
          fontFamily: "var(--font-family)",
          padding:0,
          margin:0
        }}
      >
        <TitleContainer />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height:'fit-content',
            fontFamily: "var(--font-family)",
            margin:0,
            padding:0,
          }}
        >
          <InfoContainer />
          <InputContainer
            setRoute={props.setRoute}
            jobDescription={props.jobDescription}
            setJobDescription={props.setJobDescription}
            setLlmResult={props.setLlmResult}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
