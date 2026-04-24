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
          alignItems: "center",
          textAlign: "center",
          paddingTop: "0",
          paddingBottom: "3rem",
          paddingRight: "5%",
          paddingLeft: "5%",
        }}
      >
        <TitleContainer />
        <InputContainer
          setRoute={props.setRoute}
          jobDescription={props.jobDescription}
          setJobDescription={props.setJobDescription}
          setLlmResult={props.setLlmResult}
        />
        <InfoContainer />
      </div>
      <Footer />
    </>
  );
}

export default Home;
