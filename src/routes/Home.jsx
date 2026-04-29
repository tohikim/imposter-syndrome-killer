import Header from "../components/Header.jsx";
import TitleContainer from "../components/TitleContainer.jsx";
import InputContainer from "../components/InputContainer.jsx";
import InfoContainer from "../components/InfoContainer.jsx";
import { Mirage } from "ldrs/react";
import "ldrs/react/Mirage.css";

function Home(props) {
  if (props.loading) {
    return (
      <div style={styles.loading}>
        <Mirage
          size="60"
          speed="2.5"
          color="var(--color-navy)"
          position="relative"
        />
        <p style={styles.p}>We're loading your result...</p>
      </div>
    );
  }
  return (
    <>
      <Header
        setRoute={props.setRoute}
        setJobDescription={props.setJobDescription}
        enableRestart={false}
        enableShare={false}
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
            loading={props.loading}
            setLoading={props.setLoading}
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    margin: 0,
    padding: 0,
  },
  loading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: 0,
    margin: 0,
  },
  p: {
    fontSize: "18px",
    fontWeight: "100",
    paddingTop: "1rem",
  },
};

export default Home;
