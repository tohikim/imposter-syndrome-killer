import logo from "../assets/logo.png";
import homeicon from "../assets/home-icon.png";

const Header = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setRoute("home");
    props.setJobDescription("");
  };
  return (
    <>
      <div
        className="header-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "fit-content",
          verticalAlign: "top",
          padding: "1rem",
        }}
      >
        <div
          className="logo-container"
          style={{
            alignItems: "left",
            margin: "0",
            padding: "0",
          }}
        >
          <img
            className="logo"
            src={logo}
            style={{
              height: 40,
              width: 150,
              padding: 0,
              margin: 0,
            }}
          />
        </div>
        <div
          className="icon-container"
          style={{
            alignItems: "right",
            margin: "0",
            padding: "0",
          }}
        >
          <button
            onClick={handleClick}
            style={{
              backgroundColor: "transparent",
              borderWidth: "0",
              alignItems: "right",
            }}
          >
            <img
              className="home-icon"
              src={homeicon}
              style={{
                height: 50,
                width: 50,
                padding: 0,
                margin: 0,
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
