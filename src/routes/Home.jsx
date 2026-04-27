import Header from "../components/Header.jsx";
import Footer from "../@deprecated/@deprecated Footer.jsx";
import TitleContainer from "../components/TitleContainer.jsx";
import InputContainer from "../components/InputContainer.jsx";
import InfoContainer from "../components/InfoContainer.jsx";

function Home(props) {
  return (
    <>
      <Header
        setRoute={props.setRoute}
        setJobDescription={props.setJobDescription}
      />
      <div style={styles.container}>
        <TitleContainer />
        <div style={styles.section}>
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

const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    fontFamily: "var(--font-family)",
    padding: 0,
    margin: 0,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    fontFamily: "var(--font-family)",
    margin: 0,
    padding: 0,
  },
};

export default Home;
