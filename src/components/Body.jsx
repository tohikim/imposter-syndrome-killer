import TitleContainer from "./TitleContainer.jsx";
import InputContainer from "./InputContainer.jsx";
import InfoContainer from "./InfoContainer.jsx";

const Body = (props) => {
  return (
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
      />
      <InfoContainer />
    </div>
  );
};

export default Body;
